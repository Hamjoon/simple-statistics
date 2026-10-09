# Part 3 command log

Commands below were run from the repository root unless the entry names another directory. Successful commands exited 0.

| Command or action | Outcome |
| --- | --- |
| `git status -sb`; `git log -1 --format='%h %s'` | Clean experiment branch, `efd5c8a` before Part 3. |
| Read `docs/handover-part2.md`, `docs/handover-part1-complete.md`, `docs/part1-review-decisions.md`, `docs/deviations.md`, runner scripts, compose, and baseline TAP. | Completed; no model call. No command directly opened `.env`. Compose may have auto-loaded it at startup; see D-08. |
| `git fetch https://github.com/simple-statistics/simple-statistics.git 'refs/tags/*:refs/tags/*'` | Exit 0; upstream tags fetched. |
| `git tag --points-at 31f037dd`; `git rev-list --count --first-parent 31f037dd..origin/main` | `v7.7.6`; 133. |
| `git rev-list --reverse --first-parent 31f037dd..origin/main > results/commits.txt`; `python3 scripts/make-commit-table.py`; `wc -l results/commits.txt` | 133 rows, 15 tagged rows at requested positions, yarn to pnpm at #30. |
| `git diff -- docker/compose.yml` | Showed mount addition and removal of `env_file`; `.env` was not read. |
| `git commit -m 'Part 3: commit list and mount' -m 'Co-authored-by: Codex <noreply@openai.com>'` | `621bef3`. |
| `python3 scripts/parse-tap.py results/dev-t` followed by extraction of `results/dev-t/subtests-baseline.csv` | 309 baseline subtests; old tracked `summary.*` remained byte-identical. |
| Copy 305 files from `results/gen-passing.json` into `llmrunner/tests/`; create package manifest and runtime symlinks. | 305 unique copied files. |
| `docker compose run --rm -T tp` with Node package-resolution probes | Mocha 10.1.0; both runners resolve `/work/ss/dist/simple-statistics.js`. |
| First t runner invocation (direct script execution) | Exit 126: host script had non-executable mode (`/bin/bash: bad interpreter: Permission denied`). Retried using `bash script`. |
| `caffeinate -dims docker compose run --rm -T tp bash -lc '...run-generated-tests.sh...; ...node dev tests...; parse-tap.py...'` | Exit 0. LLM 305/305 pass; Dev 309/309 ok subtests and 1,024 ok lines. |
| `caffeinate -dims docker compose run --rm -T tp bash .../run-batch.sh 1 3` | Trial launched in a persistent shell session; per-commit outcomes follow. |

  Completed in 122s; status: ok

- Batch 1-3, commit 2 aecc456: started 2026-10-09T11:05:52Z
  Completed in 114s; status: ok

- Batch 1-3, commit 3 362641a: started 2026-10-09T11:07:46Z
  Completed in 118s; status: ok

- Batch 82-83, commit 82 2a98671: started 2026-10-09T11:09:51Z

Trial #1–#3 completed in the persistent container session. All three builds were OK, all had 305 LLM pass rows, 309 developer subtests OK, and 1,024 assertion `ok` lines. Per-commit elapsed seconds were 122, 114, and 118. The 305/309 row checks were run with Python against the saved CSVs and `status.json`.

| Command or action | Outcome |
| --- | --- |
| `caffeinate -dims docker compose run --rm -T tp bash .../run-batch.sh 82 83` | ESM trial launched; outcomes follow in per-commit lines. |
  Completed in 112s; status: ok

- Batch 82-83, commit 83 f9d368f: started 2026-10-09T11:11:43Z
  Completed in 105s; status: ok

- Batch 4-81, commit 4 b87de8d: started 2026-10-09T11:13:41Z

Trial #82–#83 completed. Both built with `./dist/simple-statistics.cjs`, 305 LLM rows and 309 developer rows. Each has 298 LLM passes, 7 LLM failures, 301 developer subtests OK, 8 not OK, and zero load failures. Per-commit elapsed seconds: 112 and 105. The Python trial gate asserted the target suffix, row counts, and non-dominant load failures.

| Command or action | Outcome |
| --- | --- |
| `python3 -m py_compile ...`; `bash -n ...` | All new Python and shell scripts passed syntax checks. |
| First attempt to append this log entry from `docker/` | `docs/log-part3.md` path was wrong; `zsh` reported no such file. The subsequent batch command still launched. |
| `caffeinate -dims docker compose run --rm -T tp bash .../run-batch.sh 4 81` | Main batch launched; outcomes follow in per-commit lines. |
  Completed in 138s; status: ok

- Batch 4-81, commit 5 b4f4c26: started 2026-10-09T11:15:59Z
  Completed in 132s; status: ok

- Batch 4-81, commit 6 1acace8: started 2026-10-09T11:18:11Z
  Completed in 121s; status: ok

- Batch 4-81, commit 7 4dd9bd8: started 2026-10-09T11:20:12Z
  Completed in 111s; status: ok

- Batch 4-81, commit 8 6a39431: started 2026-10-09T11:22:03Z
  Completed in 112s; status: ok

- Batch 4-81, commit 9 64571c5: started 2026-10-09T11:23:55Z
  Completed in 134s; status: ok

- Batch 4-81, commit 10 064dbe5: started 2026-10-09T11:26:09Z

- Read-only 15-minute monitor at 2026-10-09T11:27:55+00:00: last completed #9; 6 commits in batch 4–81 complete.
  Completed in 124s; status: ok

- Batch 4-81, commit 11 8100d60: started 2026-10-09T11:28:13Z
  Completed in 108s; status: ok

- Batch 4-81, commit 12 7e630e6: started 2026-10-09T11:30:01Z
  Completed in 107s; status: ok

- Batch 4-81, commit 13 c501b36: started 2026-10-09T11:31:48Z
  Completed in 114s; status: ok

- Batch 4-81, commit 14 dd5e72c: started 2026-10-09T11:33:42Z
  Completed in 120s; status: ok

- Batch 4-81, commit 15 32bd9ad: started 2026-10-09T11:35:42Z
  Completed in 113s; status: ok

- Batch 4-81, commit 16 232595c: started 2026-10-09T11:37:35Z
  Completed in 120s; status: ok

- Batch 4-81, commit 17 ddf5528: started 2026-10-09T11:39:35Z
  Completed in 120s; status: ok

- Batch 4-81, commit 18 36ba752: started 2026-10-09T11:41:35Z
  Completed in 119s; status: ok

- Batch 4-81, commit 19 a11df16: started 2026-10-09T11:43:34Z

- Read-only 15-minute monitor at 2026-10-09T11:44:07+00:00: last completed #18; 15 commits in batch 4–81 complete.
  Completed in 126s; status: ok

- Batch 4-81, commit 20 aa8eecc: started 2026-10-09T11:45:40Z
  Completed in 118s; status: ok

- Batch 4-81, commit 21 95b7def: started 2026-10-09T11:47:38Z
  Completed in 127s; status: ok

- Batch 4-81, commit 22 b4a9c78: started 2026-10-09T11:49:45Z
  Completed in 116s; status: ok

- Batch 4-81, commit 23 98fc28c: started 2026-10-09T11:51:41Z
  Completed in 134s; status: ok

- Batch 4-81, commit 24 85f7797: started 2026-10-09T11:53:55Z
  Completed in 125s; status: ok

- Batch 4-81, commit 25 8795585: started 2026-10-09T11:56:01Z
  Completed in 118s; status: ok

- Batch 4-81, commit 26 18a189d: started 2026-10-09T11:57:59Z

- Read-only 15-minute monitor at 2026-10-09T11:59:42+00:00: last completed #25; 22 commits in batch 4–81 complete.
  Completed in 117s; status: ok

- Batch 4-81, commit 27 800ecde: started 2026-10-09T11:59:56Z
  Completed in 117s; status: ok

- Batch 4-81, commit 28 f04e259: started 2026-10-09T12:01:53Z
  Completed in 114s; status: ok

- Batch 4-81, commit 29 21a062e: started 2026-10-09T12:03:47Z
  Completed in 132s; status: ok

- Batch 4-81, commit 30 995773c: started 2026-10-09T12:06:00Z
  Completed in 21s; status: fail

- Batch 4-81, commit 31 c1da58c: started 2026-10-09T12:06:20Z
  Completed in 16s; status: fail

- Batch 4-81, commit 32 bb2e83d: started 2026-10-09T12:06:36Z
  Completed in 18s; status: fail

- Batch 4-81, commit 33 197d49a: started 2026-10-09T12:06:54Z

At #30 (`995773c`) the pnpm transition caused `ERR_PNPM_IGNORED_BUILDS` for `@biomejs/biome@1.8.3`. `install exit=1`, `install_fallback exit=1`, and `install_cache_retry exit=1` are in its `steps.log`; `install.txt` retains the exact output locally. The batch was already advancing and was left running under the no-interruption rule. This is D-09, the stopping issue.
  Completed in 17s; status: fail

- Batch 4-81, commit 34 8a5e7d2: started 2026-10-09T12:07:11Z
  Completed in 17s; status: fail

- Batch 4-81, commit 35 7e22fa6: started 2026-10-09T12:07:28Z
  Completed in 19s; status: fail

- Batch 4-81, commit 36 be2254c: started 2026-10-09T12:07:47Z
  Completed in 19s; status: fail

- Batch 4-81, commit 37 48b011a: started 2026-10-09T12:08:06Z
  Completed in 16s; status: fail

- Batch 4-81, commit 38 af0e960: started 2026-10-09T12:08:22Z
  Completed in 17s; status: fail

- Batch 4-81, commit 39 2fefa3c: started 2026-10-09T12:08:39Z
  Completed in 15s; status: fail

- Batch 4-81, commit 40 04710c0: started 2026-10-09T12:08:54Z
  Completed in 17s; status: fail

- Batch 4-81, commit 41 ecf4f5c: started 2026-10-09T12:09:11Z
  Completed in 18s; status: fail

- Batch 4-81, commit 42 8c0fc49: started 2026-10-09T12:09:29Z
  Completed in 17s; status: fail

- Batch 4-81, commit 43 8fa6ba1: started 2026-10-09T12:09:46Z
  Completed in 18s; status: fail

- Batch 4-81, commit 44 0beb70b: started 2026-10-09T12:10:04Z
  Completed in 20s; status: fail

- Batch 4-81, commit 45 94ba07e: started 2026-10-09T12:10:24Z
  Completed in 15s; status: fail

- Batch 4-81, commit 46 6c18fd0: started 2026-10-09T12:10:39Z
  Completed in 19s; status: fail

- Batch 4-81, commit 47 4a073ca: started 2026-10-09T12:10:58Z
  Completed in 16s; status: fail

- Batch 4-81, commit 48 6f44418: started 2026-10-09T12:11:14Z
  Completed in 16s; status: fail

- Batch 4-81, commit 49 61e6703: started 2026-10-09T12:11:30Z
  Completed in 18s; status: fail

- Batch 4-81, commit 50 b7cd6cd: started 2026-10-09T12:11:48Z
  Completed in 17s; status: fail

- Batch 4-81, commit 51 20d7e44: started 2026-10-09T12:12:05Z
  Completed in 16s; status: fail

- Batch 4-81, commit 52 5b1f37b: started 2026-10-09T12:12:21Z
  Completed in 17s; status: fail

- Batch 4-81, commit 53 181cdf5: started 2026-10-09T12:12:38Z
  Completed in 17s; status: fail

- Batch 4-81, commit 54 f8845ce: started 2026-10-09T12:12:56Z
  Completed in 17s; status: fail

- Batch 4-81, commit 55 1b0bd1a: started 2026-10-09T12:13:13Z
  Completed in 17s; status: fail

- Batch 4-81, commit 56 a4a1df9: started 2026-10-09T12:13:30Z
  Completed in 18s; status: fail

- Batch 4-81, commit 57 a890108: started 2026-10-09T12:13:48Z
  Completed in 16s; status: fail

- Batch 4-81, commit 58 ac07cbe: started 2026-10-09T12:14:04Z
  Completed in 18s; status: fail

- Batch 4-81, commit 59 ac5e988: started 2026-10-09T12:14:22Z
  Completed in 19s; status: fail

- Batch 4-81, commit 60 6857102: started 2026-10-09T12:14:41Z
  Completed in 17s; status: fail

- Batch 4-81, commit 61 3949249: started 2026-10-09T12:14:58Z

- Read-only 15-minute monitor at 2026-10-09T12:15:02+00:00: last completed #60; 57 commits in batch 4–81 complete.
  Completed in 117s; status: ok

- Batch 4-81, commit 62 2daf714: started 2026-10-09T12:16:55Z
  Completed in 126s; status: ok

- Batch 4-81, commit 63 5a4dc9d: started 2026-10-09T12:19:01Z
  Completed in 119s; status: ok

- Batch 4-81, commit 64 8bb4ae7: started 2026-10-09T12:21:00Z
  Completed in 121s; status: ok

- Batch 4-81, commit 65 c268071: started 2026-10-09T12:23:01Z
  Completed in 111s; status: ok

- Batch 4-81, commit 66 91a309a: started 2026-10-09T12:24:52Z
  Completed in 120s; status: ok

- Batch 4-81, commit 67 462d57b: started 2026-10-09T12:26:52Z
  Completed in 119s; status: ok

- Batch 4-81, commit 68 50b2ff8: started 2026-10-09T12:28:51Z
  Completed in 120s; status: ok

- Batch 4-81, commit 69 b7b2053: started 2026-10-09T12:30:51Z
  Completed in 126s; status: ok

- Batch 4-81, commit 70 48d28fd: started 2026-10-09T12:32:57Z

- Read-only 15-minute monitor at 2026-10-09T12:33:58+00:00: last completed #69; 66 commits in batch 4–81 complete.
  Completed in 132s; status: ok

- Batch 4-81, commit 71 f79f5b6: started 2026-10-09T12:35:09Z
  Completed in 124s; status: ok

- Batch 4-81, commit 72 238aec9: started 2026-10-09T12:37:13Z
  Completed in 109s; status: ok

- Batch 4-81, commit 73 83fcf3a: started 2026-10-09T12:39:02Z
  Completed in 107s; status: ok

- Batch 4-81, commit 74 bdcbf21: started 2026-10-09T12:40:49Z
  Completed in 110s; status: ok

- Batch 4-81, commit 75 72569e8: started 2026-10-09T12:42:39Z
  Completed in 125s; status: ok

- Batch 4-81, commit 76 b963ea8: started 2026-10-09T12:44:44Z
  Completed in 119s; status: ok

- Batch 4-81, commit 77 9c1bb2f: started 2026-10-09T12:46:43Z
  Completed in 112s; status: ok

- Batch 4-81, commit 78 0102f1b: started 2026-10-09T12:48:35Z
  Completed in 118s; status: ok

- Batch 4-81, commit 79 17ba2f9: started 2026-10-09T12:50:33Z
  Completed in 110s; status: ok

- Batch 4-81, commit 80 d571a60: started 2026-10-09T12:52:23Z
  Completed in 133s; status: ok

- Batch 4-81, commit 81 5715425: started 2026-10-09T12:54:36Z

- Read-only batch monitor at 2026-10-09T12:55:07+00:00: last completed #80; 77 commits in batch 4–81 complete.
  Completed in 119s; status: ok

- Batch 30-60, commit 30 995773c: started 2026-10-09T12:57:46Z

The #4–#81 batch exited after completing 78 commit directories. A read-only status audit found exactly 31 build failures, #30–#60, all with `ERR_PNPM_IGNORED_BUILDS`; no other build-fail reason occurred. `bash -n scripts/run-commit.sh` passed after adding `--ignore-scripts` and `install_ignore_scripts`. A Python move archived the 31 failed result directories under ignored `results/survival-attempt1/` without deleting or overwriting them. The first attempt to append this entry used the `docker/` working directory and reported `docs/log-part3.md: no such file`; the recovery batch command still launched.

| Command or action | Outcome |
| --- | --- |
| `caffeinate -dims docker compose --env-file /dev/null run --rm -T tp bash .../run-batch.sh 30 60` | Recovery batch launched; per-commit outcomes follow. |
  Completed in 113s; status: ok

- Batch 30-60, commit 31 c1da58c: started 2026-10-09T12:59:39Z
  Completed in 112s; status: ok

- Batch 30-60, commit 32 bb2e83d: started 2026-10-09T13:01:31Z

The replacement #30 and #31 results were checked by hand while the recovery batch continued: both have `build: ok`, `install_ignore_scripts: true`, 305 LLM summary rows, 309 developer subtest rows, and full 305/309 point passes. The preserved first attempts remain under ignored `results/survival-attempt1/`.
  Completed in 112s; status: ok

- Batch 30-60, commit 33 197d49a: started 2026-10-09T13:03:23Z
  Completed in 114s; status: ok

- Batch 30-60, commit 34 8a5e7d2: started 2026-10-09T13:05:17Z
  Completed in 115s; status: ok

- Batch 30-60, commit 35 7e22fa6: started 2026-10-09T13:07:12Z
  Completed in 108s; status: ok

- Batch 30-60, commit 36 be2254c: started 2026-10-09T13:09:00Z
  Completed in 108s; status: ok

- Batch 30-60, commit 37 48b011a: started 2026-10-09T13:10:48Z

- Read-only 15-minute recovery monitor at 2026-10-09T13:10:59+00:00: last completed #36; 7 of 31 replacements complete.
  Completed in 110s; status: ok

- Batch 30-60, commit 38 af0e960: started 2026-10-09T13:12:38Z
  Completed in 107s; status: ok

- Batch 30-60, commit 39 2fefa3c: started 2026-10-09T13:14:25Z
  Completed in 109s; status: ok

- Batch 30-60, commit 40 04710c0: started 2026-10-09T13:16:14Z
  Completed in 107s; status: ok

- Batch 30-60, commit 41 ecf4f5c: started 2026-10-09T13:18:01Z
  Completed in 108s; status: ok

- Batch 30-60, commit 42 8c0fc49: started 2026-10-09T13:19:49Z
  Completed in 112s; status: ok

- Batch 30-60, commit 43 8fa6ba1: started 2026-10-09T13:21:41Z
  Completed in 107s; status: ok

- Batch 30-60, commit 44 0beb70b: started 2026-10-09T13:23:28Z
  Completed in 107s; status: ok

- Batch 30-60, commit 45 94ba07e: started 2026-10-09T13:25:15Z
  Completed in 109s; status: ok

- Batch 30-60, commit 46 6c18fd0: started 2026-10-09T13:27:04Z

- Read-only 15-minute recovery monitor at 2026-10-09T13:27:41+00:00: last completed #45; 16 of 31 replacements complete.
  Completed in 108s; status: ok

- Batch 30-60, commit 47 4a073ca: started 2026-10-09T13:28:52Z
  Completed in 106s; status: ok

- Batch 30-60, commit 48 6f44418: started 2026-10-09T13:30:38Z
  Completed in 108s; status: ok

- Batch 30-60, commit 49 61e6703: started 2026-10-09T13:32:26Z
  Completed in 107s; status: ok

- Batch 30-60, commit 50 b7cd6cd: started 2026-10-09T13:34:13Z
  Completed in 107s; status: ok

- Batch 30-60, commit 51 20d7e44: started 2026-10-09T13:36:00Z
  Completed in 107s; status: ok

- Batch 30-60, commit 52 5b1f37b: started 2026-10-09T13:37:47Z
  Completed in 106s; status: ok

- Batch 30-60, commit 53 181cdf5: started 2026-10-09T13:39:33Z
  Completed in 108s; status: ok

- Batch 30-60, commit 54 f8845ce: started 2026-10-09T13:41:21Z

- Read-only 15-minute recovery monitor at 2026-10-09T13:42:23+00:00: last completed #53; 24 of 31 replacements complete.
  Completed in 106s; status: ok

- Batch 30-60, commit 55 1b0bd1a: started 2026-10-09T13:43:07Z
  Completed in 108s; status: ok

- Batch 30-60, commit 56 a4a1df9: started 2026-10-09T13:44:55Z
  Completed in 108s; status: ok

- Batch 30-60, commit 57 a890108: started 2026-10-09T13:46:43Z
  Completed in 109s; status: ok

- Batch 30-60, commit 58 ac07cbe: started 2026-10-09T13:48:32Z
  Completed in 106s; status: ok

- Batch 30-60, commit 59 ac5e988: started 2026-10-09T13:50:18Z
  Completed in 111s; status: ok

- Batch 30-60, commit 60 6857102: started 2026-10-09T13:52:09Z
  Completed in 105s; status: ok

The recovery #30–#60 batch exited. A full CSV/status audit found 31/31 `build: ok`, `install_ignore_scripts: true`, 305 LLM rows, and 309 developer rows, with zero install or build fallbacks. The archived first attempts were not inputs to this audit.

| Command or action | Outcome |
| --- | --- |
| `caffeinate -dims docker compose --env-file /dev/null run --rm -T tp bash .../run-batch.sh 84 133` | Final survival batch launched; per-commit outcomes follow. |

- Batch 84-133, commit 84 43e3439: started 2026-10-09T13:54:18Z
  Completed in 104s; status: ok

- Batch 84-133, commit 85 13530b2: started 2026-10-09T13:56:02Z
  Completed in 98s; status: ok

- Batch 84-133, commit 86 0779f22: started 2026-10-09T13:57:41Z
  Completed in 99s; status: ok

- Batch 84-133, commit 87 7e9884e: started 2026-10-09T13:59:20Z
  Completed in 100s; status: ok

- Batch 84-133, commit 88 2149cff: started 2026-10-09T14:01:00Z
  Completed in 97s; status: ok

- Batch 84-133, commit 89 5bbf6bc: started 2026-10-09T14:02:37Z
  Completed in 99s; status: ok

- Batch 84-133, commit 90 6314edb: started 2026-10-09T14:04:16Z
  Completed in 101s; status: ok

- Batch 84-133, commit 91 8449cf5: started 2026-10-09T14:05:57Z
  Completed in 99s; status: ok

- Batch 84-133, commit 92 a078231: started 2026-10-09T14:07:36Z
  Completed in 98s; status: ok

- Batch 84-133, commit 93 894958a: started 2026-10-09T14:09:14Z

- Read-only 15-minute final-batch monitor at 2026-10-09T14:09:47+00:00: last completed #92; 9 of 50 commits complete.
  Completed in 101s; status: ok

- Batch 84-133, commit 94 c9f875a: started 2026-10-09T14:10:55Z
  Completed in 100s; status: ok

- Batch 84-133, commit 95 6bec231: started 2026-10-09T14:12:36Z
  Completed in 99s; status: ok

- Batch 84-133, commit 96 7b3a609: started 2026-10-09T14:14:15Z
  Completed in 99s; status: ok

- Batch 84-133, commit 97 0c33928: started 2026-10-09T14:15:54Z
  Completed in 99s; status: ok

- Batch 84-133, commit 98 7063073: started 2026-10-09T14:17:33Z
  Completed in 100s; status: ok

- Batch 84-133, commit 99 08369c8: started 2026-10-09T14:19:13Z
  Completed in 99s; status: ok

- Batch 84-133, commit 100 f59d6d2: started 2026-10-09T14:20:52Z
  Completed in 101s; status: ok

- Batch 84-133, commit 101 62d100a: started 2026-10-09T14:22:33Z
  Completed in 101s; status: ok

- Batch 84-133, commit 102 f25c2ba: started 2026-10-09T14:24:14Z
  Completed in 100s; status: ok

- Batch 84-133, commit 103 32096eb: started 2026-10-09T14:25:54Z

- Read-only final-batch monitor at 2026-10-09T14:26:54+00:00: last completed #102; 19 of 50 commits complete.
  Completed in 98s; status: ok

- Batch 84-133, commit 104 7643ea9: started 2026-10-09T14:27:32Z
  Completed in 99s; status: ok

- Batch 84-133, commit 105 5c54a63: started 2026-10-09T14:29:11Z
  Completed in 101s; status: ok

- Batch 84-133, commit 106 f2a67a3: started 2026-10-09T14:30:52Z
  Completed in 100s; status: ok

- Batch 84-133, commit 107 e8518fa: started 2026-10-09T14:32:32Z
  Completed in 100s; status: ok

- Batch 84-133, commit 108 5b73a3c: started 2026-10-09T14:34:12Z
  Completed in 100s; status: ok

- Batch 84-133, commit 109 a8c348c: started 2026-10-09T14:35:52Z
  Completed in 100s; status: ok

- Batch 84-133, commit 110 d4adf28: started 2026-10-09T14:37:32Z
  Completed in 100s; status: ok

- Batch 84-133, commit 111 cc052d6: started 2026-10-09T14:39:12Z
  Completed in 101s; status: ok

- Batch 84-133, commit 112 2239688: started 2026-10-09T14:40:53Z

- Read-only 15-minute final-batch monitor at 2026-10-09T14:41:44+00:00: last completed #111; 28 of 50 commits complete.
  Completed in 100s; status: ok

- Batch 84-133, commit 113 b6debf9: started 2026-10-09T14:42:33Z
  Completed in 99s; status: ok

- Batch 84-133, commit 114 a48dc26: started 2026-10-09T14:44:12Z
  Completed in 101s; status: ok

- Batch 84-133, commit 115 e74db06: started 2026-10-09T14:45:53Z
  Completed in 100s; status: ok

- Batch 84-133, commit 116 02907dd: started 2026-10-09T14:47:33Z
  Completed in 99s; status: ok

- Batch 84-133, commit 117 3ca20c8: started 2026-10-09T14:49:12Z
  Completed in 100s; status: ok

- Batch 84-133, commit 118 cbbae6d: started 2026-10-09T14:50:52Z
  Completed in 101s; status: ok

- Batch 84-133, commit 119 ec2cfc7: started 2026-10-09T14:52:33Z
  Completed in 99s; status: ok

- Batch 84-133, commit 120 2363d93: started 2026-10-09T14:54:12Z
  Completed in 100s; status: ok

- Batch 84-133, commit 121 714d22a: started 2026-10-09T14:55:52Z

- Read-only 15-minute final-batch monitor at 2026-10-09T14:56:35+00:00: last completed #120; 37 of 50 commits complete.
  Completed in 99s; status: ok

- Batch 84-133, commit 122 2c1e374: started 2026-10-09T14:57:31Z
  Completed in 99s; status: ok

- Batch 84-133, commit 123 48b4edd: started 2026-10-09T14:59:10Z
  Completed in 101s; status: ok

- Batch 84-133, commit 124 a7b0357: started 2026-10-09T15:00:51Z
  Completed in 101s; status: ok

- Batch 84-133, commit 125 806fc5c: started 2026-10-09T15:02:32Z
  Completed in 101s; status: ok

- Batch 84-133, commit 126 d3e92a6: started 2026-10-09T15:04:13Z
  Completed in 100s; status: ok

- Batch 84-133, commit 127 5ee3e8b: started 2026-10-09T15:05:53Z
  Completed in 99s; status: ok

- Batch 84-133, commit 128 f364089: started 2026-10-09T15:07:32Z
  Completed in 98s; status: ok

- Batch 84-133, commit 129 f7b37aa: started 2026-10-09T15:09:10Z
  Completed in 101s; status: ok

- Batch 84-133, commit 130 f916642: started 2026-10-09T15:10:51Z
  Completed in 101s; status: ok

- Batch 84-133, commit 131 e0bab0f: started 2026-10-09T15:12:32Z

- Read-only final-batch monitor at 2026-10-09T15:13:30+00:00: last completed #130; 47 of 50 commits complete.
  Completed in 100s; status: ok

- Batch 84-133, commit 132 f52890d: started 2026-10-09T15:14:12Z
  Completed in 100s; status: ok

- Batch 84-133, commit 133 49ca7ea: started 2026-10-09T15:15:52Z
  Completed in 100s; status: ok

The #84–#133 batch exited. A full audit of `commits.csv` against 133 `status.json` files found 133 `build: ok`, zero install fallbacks, zero build fallbacks, and exactly 305 LLM plus 309 developer rows at every commit. `install_ignore_scripts: true` appears on 81 replacement/new pnpm results (#30–#60 and #84–#133); the 23 completed #61–#83 pnpm results retain their original mode. HEAD point counts are 290 LLM passes and 299 developer subtests OK. The 31 first attempts remain ignored and unmodified.

| Command or action | Outcome |
| --- | --- |
| `caffeinate -dims docker compose --env-file /dev/null run --rm -T tp bash .../coverage-t.sh` | Coverage at t launched; outcome follows. |

`coverage-t.sh` exited 0, with 305 Mocha passes and all 70 developer files exiting 0, but its first `nyc report` calls returned 0/0 because `--include=dist/simple-statistics.js` filtered source-map remapped `src/` paths. Raw `.nyc_output` files each contained instrumented `/work/ss/dist/simple-statistics.js`. The report function was changed to omit `--include` for reporting only; `nyc report` was rerun over the saved raw data without rerunning tests. Final reports contain 90 `src/` files per group. Statement/branch coverage: loading 2.61/0, S 95.37/91.26, Dev 99.69/96.90. All three `coverage-final.json` files are under 5 MB.

`python3 scripts/aggregate-survival.py` exited 0 and produced all six requested aggregate outputs and `survival-step.csv`; sanity checks passed. A refinement to the killer-kind classification used developer TAP `notOkCount` rather than labeling every developer `not ok` as a throw; aggregation was rerun from saved result directories without test execution. Final HEAD point/cumulative counts are 290/290 of 305 for S and 299/299 of 309 developer subtests. `git diff --check` passed. The #1 trial entry was overwritten when this log was first created during that batch; its saved terminal completion was 122 s and its status/steps logs are present. The #1–#3 batch total is therefore 354 s.

Staging audit: 1,271 files, all under `experiments/testpilot-2026-10/`; 938 allowed survival files (7 per t/commit directory), 305 copied LLM test files, and 7 coverage report artifacts. No archived first attempt, TAP, stderr, install log, per-test JSON, `.nyc_output`, or `.env` file was staged. A default `git diff --cached --check` reported CRLF and terminal spaces in generated CSV records; the records were left immutable. `git -c core.whitespace=-blank-at-eol diff --cached --check` exited 0, and the staged path audit found no prohibited file. Python and shell syntax checks passed, the SVG parsed, and all requested aggregate row-count checks passed.
