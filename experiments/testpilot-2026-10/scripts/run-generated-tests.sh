#!/bin/bash
# Usage: run-generated-tests.sh <passing.json> <pkgDir> <outDir>
# Runs every test in the manifest alone under Mocha against <pkgDir>.
set -euo pipefail
MANIFEST="$1"; PKG="$2"; OUT="$3"
EXP=/work/ss/experiments/testpilot-2026-10
MOCHA=/work/testpilot2/node_modules/.bin/mocha
mkdir -p "$OUT"
TESTDIR="$PKG/tests-llm"
rm -rf "$TESTDIR"; mkdir -p "$TESTDIR"
echo "run,testFile,api,status,durationMs,message" > "$OUT/summary.csv"
jq -c '.[]' "$MANIFEST" | while read -r entry; do
  run=$(jq -r .run <<<"$entry"); tf=$(jq -r .testFile <<<"$entry"); api=$(jq -r .api <<<"$entry")
  cp "$EXP/results/$run/tests/$tf" "$TESTDIR/$tf"
  set +e
  (cd "$PKG" && timeout 20 "$MOCHA" --full-trace --exit --allow-uncaught=false --timeout 5000 --reporter=json --reporter-option output="$OUT/${run}__${tf}.json" -- "tests-llm/$tf") >/dev/null 2>"$OUT/${run}__${tf}.stderr"
  rc=$?
  set -e
  rm -f "$TESTDIR/$tf"
  if test -s "$OUT/${run}__${tf}.json"; then
    status=$(jq -r 'if .stats.failures==0 and .stats.passes>0 then "pass" elif .stats.failures>0 then "fail" else "nopass" end' "$OUT/${run}__${tf}.json")
    dur=$(jq -r '.stats.duration' "$OUT/${run}__${tf}.json")
    msg=$(jq -r '(.failures[0].err.message // "") | gsub("[\n\r,]"; " ") | .[0:200]' "$OUT/${run}__${tf}.json")
  else
    status="load-fail"; dur=""; msg=$(head -c 200 "$OUT/${run}__${tf}.stderr" | tr '\n\r,' '   ')
  fi
  echo "$run,$tf,$api,$status,$dur,$msg" >> "$OUT/summary.csv"
done
rm -rf "$TESTDIR"
