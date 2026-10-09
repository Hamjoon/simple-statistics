#!/bin/bash
set -euo pipefail
E=/work/ss/experiments/testpilot-2026-10
NYC=/work/testpilot2/node_modules/.bin/nyc
MOCHA=/work/testpilot2/node_modules/.bin/mocha
ROOT=$E/results/coverage-t
mkdir -p "$ROOT"/{loading,llm,dev}
for group in loading llm dev; do rm -rf "$ROOT/$group/.nyc_output"; done
run_nyc() {
  local group=$1; shift
  "$NYC" --cwd=/work/ss --include=dist/simple-statistics.js --exclude=node_modules \
    --reporter=json --reporter=json-summary --reporter=text-summary \
    --report-dir="$ROOT/$group" --temp-dir="$ROOT/$group/.nyc_output" --all=false --clean=false "$@"
}
report() {
  local group=$1
  # Raw data is instrumented from dist; the report filter must admit mapped src paths.
  "$NYC" report --cwd=/work/ss --exclude=node_modules \
    --reporter=json --reporter=json-summary --reporter=text-summary \
    --report-dir="$ROOT/$group" --temp-dir="$ROOT/$group/.nyc_output" --all=false > "$ROOT/$group/report.txt"
}
run_nyc loading node -e "require('/work/ss')" > "$ROOT/loading/run.txt" 2>&1
report loading
ln -sfn /work/ss "$E/llmrunner/node_modules/simple-statistics"
cd "$E/llmrunner"
run_nyc llm "$MOCHA" --full-trace --exit --allow-uncaught=false --timeout 5000 --reporter=json --reporter-option output="$ROOT/llm/mocha.json" -- tests/*.js > "$ROOT/llm/run.txt" 2>&1
report llm
ln -sfn /work/ss "$E/devrunner/node_modules/simple-statistics"
cd "$E/devrunner"
: > "$ROOT/dev/exit-codes.txt"
for f in tests/*.test.js; do
  set +e
  run_nyc dev node "$f" >> "$ROOT/dev/run.txt" 2>&1
  rc=$?
  set -e
  echo "$f exit=$rc" >> "$ROOT/dev/exit-codes.txt"
done
report dev
python3 "$E/scripts/summarize-coverage-t.py"
