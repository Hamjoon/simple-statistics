#!/bin/bash
# Run one archived commit. Existing completed results are immutable.
set -uo pipefail
n=$1; sha=$2; pad=$(printf '%03d' "$n"); short=${sha:0:7}
E=/work/ss/experiments/testpilot-2026-10
DIR=/work/ss-commits/$pad-$short
OUT=$E/results/survival/$pad-$short
[[ -f "$OUT/status.json" ]] && { echo "skip $pad-$short complete"; exit 0; }
mkdir -p "$DIR" "$OUT"
: > "$OUT/steps.log"
start=$SECONDS
step() { local name=$1 rc=$2 begun=$3; printf '%s exit=%s wall=%ss\n' "$name" "$rc" "$((SECONDS-begun))" >> "$OUT/steps.log"; }
install_fallback=false; install_ignore_scripts=false; build_fallback=false; build=fail; target=''; reason=''
begun=$SECONDS
if git -C /work/ss archive "$sha" | tar -x -C "$DIR"; then rc=0; else rc=1; reason='git archive or tar failed'; fi
step export "$rc" "$begun"
git -C /work/ss log -1 --format='%H %cs %s' "$sha" > "$OUT/commit.txt"
if [[ $rc -ne 0 ]]; then goto_status=true; else goto_status=false; fi
manager=''
if ! $goto_status; then
  if [[ -f "$DIR/yarn.lock" ]]; then manager=yarn; elif [[ -f "$DIR/pnpm-lock.yaml" ]]; then manager=pnpm; install_ignore_scripts=true; else manager=npm; fi
  begun=$SECONDS
  if [[ $manager == yarn ]]; then (cd "$DIR" && yarn install --frozen-lockfile) > "$OUT/install.txt" 2>&1; rc=$?
  elif [[ $manager == pnpm ]]; then (cd "$DIR" && pnpm install --frozen-lockfile --ignore-scripts) > "$OUT/install.txt" 2>&1; rc=$?
  else (cd "$DIR" && npm install) > "$OUT/install.txt" 2>&1; rc=$?; fi
  step install "$rc" "$begun"
  if [[ $rc -ne 0 ]]; then
    install_fallback=true; begun=$SECONDS
    if [[ $manager == yarn ]]; then (cd "$DIR" && yarn install) >> "$OUT/install.txt" 2>&1; rc=$?
    elif [[ $manager == pnpm ]]; then (cd "$DIR" && pnpm install --ignore-scripts) >> "$OUT/install.txt" 2>&1; rc=$?
    else (cd "$DIR" && npm install) >> "$OUT/install.txt" 2>&1; rc=$?; fi
    step install_fallback "$rc" "$begun"
    if [[ $rc -ne 0 ]]; then
      if [[ $manager == yarn ]]; then yarn cache clean >> "$OUT/install.txt" 2>&1; else pnpm store prune >> "$OUT/install.txt" 2>&1; fi
      begun=$SECONDS
      if [[ $manager == pnpm ]]; then (cd "$DIR" && pnpm install --ignore-scripts) >> "$OUT/install.txt" 2>&1; rc=$?
      else (cd "$DIR" && "$manager" install) >> "$OUT/install.txt" 2>&1; rc=$?; fi
      step install_cache_retry "$rc" "$begun"
    fi
  fi
  if [[ $rc -ne 0 ]]; then reason="install failed: $(tail -n 20 "$OUT/install.txt" | tr '\n' ' ')"; goto_status=true; fi
fi
if ! $goto_status; then
  target=$(node -e 'const p=require(process.argv[1]);const x=p.exports?.["."]?.require;if(typeof x!=="string")process.exit(3);console.log(x)' "$DIR/package.json" 2>/dev/null); rc=$?
  if [[ $rc -ne 0 ]]; then reason='package exports.require missing'; goto_status=true; fi
  if ! node -e 'const p=require(process.argv[1]);process.exit(p.scripts?.build?0:3)' "$DIR/package.json" 2>/dev/null; then reason='package build script missing'; goto_status=true; fi
fi
if ! $goto_status; then
  begun=$SECONDS
  (cd "$DIR" && "$manager" build) > "$OUT/build.txt" 2>&1; rc=$?
  step build "$rc" "$begun"
  if [[ $rc -ne 0 ]]; then
    build_fallback=true; begun=$SECONDS
    config=''; [[ -f "$DIR/rollup.config.js" ]] && config=rollup.config.js; [[ -f "$DIR/rollup.config.mjs" ]] && config=rollup.config.mjs
    if [[ -n $config ]]; then (cd "$DIR" && npx --no-install rollup -c "$config") >> "$OUT/build.txt" 2>&1; rc=$?; fi
    step build_fallback "$rc" "$begun"
  fi
  if [[ $rc -ne 0 ]]; then reason="build failed: $(tail -n 8 "$OUT/build.txt" | tr '\n' ' ' | cut -c1-1000)"; goto_status=true; fi
  if [[ ! -f "$DIR/${target#./}" ]]; then reason="require target missing after build: $target"; goto_status=true; fi
fi
if ! $goto_status; then
  build=ok
  mkdir -p "$OUT/llm" "$OUT/dev"
  ln -sfn "$DIR" "$E/llmrunner/node_modules/simple-statistics"
  begun=$SECONDS
  bash "$E/scripts/run-generated-tests.sh" "$E/results/gen-passing.json" "$DIR" "$OUT/llm" --in-place > "$OUT/llm/run.stdout" 2> "$OUT/llm/run.stderr"; rc=$?
  step llm "$rc" "$begun"
  ln -sfn "$DIR" "$E/devrunner/node_modules/simple-statistics"
  begun=$SECONDS
  : > "$OUT/dev/exit-codes.txt"
  for f in "$E"/devrunner/tests/*.test.js; do
    name=${f##*/}; name=${name%.test.js}
    (cd "$E/devrunner" && node "tests/$name.test.js") > "$OUT/dev/$name.tap" 2> "$OUT/dev/$name.stderr"; rc=$?
    echo "$name exit=$rc" >> "$OUT/dev/exit-codes.txt"
  done
  python3 "$E/scripts/parse-tap.py" "$OUT/dev" --baseline "$E/results/dev-t/subtests-baseline.csv" > "$OUT/dev/parse.stdout" 2> "$OUT/dev/parse.stderr"; rc=$?
  step dev "$rc" "$begun"
  if [[ $rc -ne 0 ]]; then reason="dev parse failed: $(tail -n 8 "$OUT/dev/parse.stderr" | tr '\n' ' ' | cut -c1-1000)"; build=fail; fi
fi
export OUT n sha build install_fallback install_ignore_scripts build_fallback target reason
python3 - <<'PY'
import csv,json,os
from pathlib import Path
p=Path(os.environ['OUT'])
d={'n':int(os.environ['n']),'sha':os.environ['sha'],'date':(p/'commit.txt').read_text().split()[1],
   'build':os.environ['build'],'install_fallback':os.environ['install_fallback']=='true',
   'install_ignore_scripts':os.environ['install_ignore_scripts']=='true',
   'build_fallback':os.environ['build_fallback']=='true','require_target':os.environ['target'],
   'reason':os.environ['reason']}
if d['build']=='ok':
  rows=list(csv.DictReader((p/'llm/summary.csv').open()))
  d['llm']={k:sum(r['status']==v for r in rows) for k,v in [('pass','pass'),('fail','fail'),('nopass','nopass'),('loadfail','load-fail')]}
  j=json.loads((p/'dev/summary.json').read_text())
  sub=list(csv.DictReader((p/'dev/dev-subtests.csv').open()))
  d['dev']={'subtests_ok':sum(r['status']=='ok' for r in sub),'subtests_notok':sum(r['status']=='not ok' for r in sub),
            'subtests_loadfail':sum(r['status']=='load-fail' for r in sub),'ok_lines':j['totals']['ok'],
            'notok_lines':j['totals']['notOk'],'files_exit0':j['totals']['files']-j['totals']['nonzeroExits']}
(p/'status.json').write_text(json.dumps(d,indent=2)+'\n')
PY
step status 0 "$SECONDS"
begun=$SECONDS
rm -rf "$DIR/node_modules" "$DIR/dist"
find "$OUT/dev" -name '*.tap' -size +1M -exec sh -c 'tail -n 200 "$1" > "$1.tmp" && mv "$1.tmp" "$1"' sh {} \; 2>/dev/null || true
step cleanup 0 "$begun"
echo "$pad-$short build=$build elapsed=$((SECONDS-start))s"
