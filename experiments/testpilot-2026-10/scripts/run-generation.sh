#!/bin/bash
set -euo pipefail
TP=/work/testpilot2
EXP=/work/ss/experiments/testpilot-2026-10
PKG=/work/ss
condition="$1"
case "$condition" in
  gen-smoke|gen-smoke-2) API="$EXP/results/api-smoke-2.json" ;;
  gen-full|gen-full-run2) API="$EXP/results/explore-native/api.json" ;;
  *) exit 2 ;;
esac
test ! -e "$EXP/results/$condition"
test -n "$OPENROUTER_API_KEY"
export TESTPILOT_LLM_API_ENDPOINT="https://openrouter.ai/api/v1/chat/completions"
export TESTPILOT_LLM_AUTH_HEADERS="{\"Authorization\":\"Bearer ${OPENROUTER_API_KEY}\"}"
test -n "$TESTPILOT_LLM_AUTH_HEADERS" && echo HEADERS_SET
GEN=(--package "$PKG" --model openai/gpt-oss-120b --template "$EXP/templates/template-singletest-doc.hb" --retryTemplate "$EXP/templates/retry-template.hb" --snippets doc --numSnippets 3 --snippetLength 20 --temperatures 0.0 --numCompletions 1 --maxTokens 4000 --nrAttempts 3 --timeLimit 36000)
cd "$TP"
start=$(date +%s)
set +e
node benchmark/run.js --outputDir "$EXP/results/$condition" --api "$API" "${GEN[@]}" > "/tmp/$condition.stdout.txt" 2>&1
rc=$?
set -e
if test -d "$EXP/results/$condition"; then mv "/tmp/$condition.stdout.txt" "$EXP/results/$condition/stdout.txt"; fi
end=$(date +%s)
printf '%s exit=%s wallSeconds=%s\n' "$condition" "$rc" "$((end-start))" | tee -a "$EXP/docs/log-part2.md"
exit "$rc"
