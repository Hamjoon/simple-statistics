#!/bin/bash
set -euo pipefail
E=/work/ss/experiments/testpilot-2026-10
from=$1; to=$2
for ((n=from;n<=to;n++)); do
  sha=$(sed -n "${n}p" "$E/results/commits.txt")
  test -n "$sha"
  pad=$(printf '%03d' "$n"); short=${sha:0:7}
  if [[ -f "$E/results/survival/$pad-$short/status.json" ]]; then continue; fi
  start=$SECONDS
  printf '\n- Batch %s-%s, commit %s %s: started %s\n' "$from" "$to" "$n" "$short" "$(date -u +%FT%TZ)" >> "$E/docs/log-part3.md"
  bash "$E/scripts/run-commit.sh" "$n" "$sha"
  printf '  Completed in %ss; status: %s\n' "$((SECONDS-start))" "$(python3 -c 'import json,sys; print(json.load(open(sys.argv[1]))["build"])' "$E/results/survival/$pad-$short/status.json")" >> "$E/docs/log-part3.md"
done
