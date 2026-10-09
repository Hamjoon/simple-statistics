# TestPilot / simple-statistics Part 3: 133-commit survival and coverage at t

## Range, tags, and runners

The experiment branch remained checked out. All 133 first-parent commits after anchor `31f037dd5550d554c4a96c3ee35b12e10a1c9cb7` were exported individually with `git archive` into `/work/ss-commits`; no historical commit was checked out. Upstream tags were fetched read-only. The 15 release rows are #3 v7.8.0, #7 v7.8.1, #14 v7.8.2, #22 v7.8.3, #66 v7.8.9, #76 v7.9.0, #79 v7.9.1, #81 v7.9.2, #83 v7.9.3, #91 v7.10.0, #97 v7.10.1, #104 v7.10.2, #109 v7.11.0, #120 v7.12.0, and #127 v7.12.1. The lockfile changes from yarn to pnpm at #30.

`llmrunner/tests/` contains the frozen 305 passing generated files, named `<run>__<testFile>`; `devrunner/tests/` contains the 70 frozen developer files. Both runners live outside the package and resolve it by name through their `node_modules/simple-statistics` symlinks. Mocha is testpilot2 version 10.1.0. The external t row reproduced **305/305** LLM passes, **309/309** developer subtests OK, and **1,024** developer `ok` lines. Every commit result has 305 LLM and 309 developer rows. No model call was made.

## Pnpm install recovery and batch execution

The first #4–#81 batch recorded 31 install failures, #30–#60, with `ERR_PNPM_IGNORED_BUILDS` for `@biomejs/biome`; its first attempt logs and statuses remain in ignored `results/survival-attempt1/`. The batch was not interrupted. The addendum authorized `pnpm install --frozen-lockfile --ignore-scripts` (and the same flag on non-frozen retry). All 31 replacement commits built and tested successfully. The final results contain **zero build failures**, **zero install fallbacks**, and **zero build fallbacks**. The archived first attempts are not aggregation inputs and are not committed.

Pnpm install modes in the final results: **#30–#60 and #84–#133 (81 commits)** use `--ignore-scripts` and record `install_ignore_scripts: true`; **#61–#83 (23 commits)** retain their completed original-mode results without that key. #1–#29 use yarn. The addendum states Biome’s install script downloads a linter binary that the Rollup build does not use. `D-09` and `D-10` in the deviation register preserve the initial error and recovery rationale.

| Batch | Commits completed | Wall time from per-commit log | Build failures in that pass | Install/build fallback |
| --- | ---: | ---: | --- | --- |
| Initial trial #1–#3 | 3 | 354 s (5m 54s) | none | none |
| ESM trial #82–#83 | 2 | 217 s (3m 37s) | none | none |
| First pass #4–#81 | 78 | 6,172 s (1h 42m 52s) | #30–#60, archived below | 31 non-frozen retries and store-prune retries; no build fallback |
| Recovery #30–#60 | 31 | 3,368 s (56m 08s) | none | none |
| Final #84–#133 | 50 | 4,992 s (1h 23m 12s) | none | none |

The first-attempt failure reason changed only in Biome version and an added warning: #30–#35 named `@biomejs/biome@1.8.3`, #36–#40 named 1.9.2, and #41–#60 named 1.9.4. From #48, pnpm also warned that `pnpm.onlyBuiltDependencies` in `package.json` was no longer read. Every first-attempt failure has its own `status.json`, `steps.log`, and local `install.txt` under `results/survival-attempt1/<nnn>-<sha7>/`; the 31 SHA identifiers and error tails are recorded there. No other commit failed to build.

| Archived attempt n | sha7 | install error tail |
| ---: | --- | --- |
| 30 | `995773c` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.8.3 |
| 31 | `c1da58c` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.8.3 |
| 32 | `bb2e83d` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.8.3 |
| 33 | `197d49a` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.8.3 |
| 34 | `8a5e7d2` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.8.3 |
| 35 | `7e22fa6` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.8.3 |
| 36 | `be2254c` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.2 |
| 37 | `48b011a` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.2 |
| 38 | `af0e960` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.2 |
| 39 | `2fefa3c` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.2 |
| 40 | `04710c0` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.2 |
| 41 | `ecf4f5c` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4 |
| 42 | `8c0fc49` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4 |
| 43 | `8fa6ba1` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4 |
| 44 | `0beb70b` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4 |
| 45 | `94ba07e` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4 |
| 46 | `6c18fd0` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4 |
| 47 | `4a073ca` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4 |
| 48 | `6f44418` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 49 | `61e6703` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 50 | `b7cd6cd` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 51 | `20d7e44` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 52 | `5b1f37b` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 53 | `181cdf5` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 54 | `f8845ce` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 55 | `1b0bd1a` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 56 | `a4a1df9` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 57 | `a890108` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 58 | `ac07cbe` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 59 | `ac5e988` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |
| 60 | `6857102` | `ERR_PNPM_IGNORED_BUILDS`: @biomejs/biome@1.9.4; `pnpm.onlyBuiltDependencies` ignored |

## Survival

At HEAD (#133, `49ca7eab`), S has **290/305** passing point tests and **290/305** cumulative survivors (95.08%). Developer tests have **299/309** OK point subtests and **299/309** cumulative survivors (96.76%); the secondary assertion count is **1,001 `ok`** and **23 `not ok`** lines. Point and cumulative counts coincide at HEAD. The largest killer is #64, an incorrect-quantile fix, with 7 newly dead LLM tests and 8 developer subtests. The six killing commits are #64, #84, #86, #113, #114, and #119.

| n | sha7 | tag | subject | newly dead S | newly dead Dev | S cumulative | Dev cumulative |
| ---: | --- | --- | --- | ---: | ---: | ---: | ---: |
| 0 | `31f037d` | v7.7.6 | anchor t | 0 | 0 | 305 | 309 |
| 3 | `362641a` | v7.8.0 | chore(release): 7.8.0 | 0 | 0 | 305 | 309 |
| 7 | `4dd9bd8` | v7.8.1 | chore(release): 7.8.1 | 0 | 0 | 305 | 309 |
| 14 | `dd5e72c` | v7.8.2 | chore(release): 7.8.2 | 0 | 0 | 305 | 309 |
| 22 | `b4a9c78` | v7.8.3 | chore(release): 7.8.3 | 0 | 0 | 305 | 309 |
| 64 | `8bb4ae7` | — | fix: incorrect quantile computation (Issue #353) (#783) | 7 | 8 | 298 | 301 |
| 66 | `91a309a` | v7.8.9 | Add publishConfig to package.json (#786) | 0 | 0 | 298 | 301 |
| 76 | `b963ea8` | v7.9.0 | Version Packages (#797) | 0 | 0 | 298 | 301 |
| 79 | `17ba2f9` | v7.9.1 | Version Packages (#801) | 0 | 0 | 298 | 301 |
| 81 | `5715425` | v7.9.2 | Version Packages (#806) | 0 | 0 | 298 | 301 |
| 83 | `f9d368f` | v7.9.3 | Version Packages (#808) | 0 | 0 | 298 | 301 |
| 84 | `43e3439` | — | fix(bayes): accumulate scores across all item properties (#810) | 1 | 0 | 297 | 301 |
| 86 | `0779f22` | — | fix(rank-correlation): give tied values midranks (#814) | 1 | 0 | 296 | 301 |
| 91 | `8449cf5` | v7.10.0 | Version Packages (#817) | 0 | 0 | 296 | 301 |
| 97 | `0c33928` | v7.10.1 | Use pnpm 11, not 10 (#827) | 0 | 0 | 296 | 301 |
| 104 | `7643ea9` | v7.10.2 | Version Packages (#834) | 0 | 0 | 296 | 301 |
| 109 | `a8c348c` | v7.11.0 | Version Packages (#842) | 0 | 0 | 296 | 301 |
| 113 | `b6debf9` | — | fix(gamma): lift small arguments before the Nemes expansion (#852) | 2 | 0 | 294 | 301 |
| 114 | `a48dc26` | — | fix(perceptron): stop train from writing through to the caller's array (#846) | 1 | 0 | 293 | 301 |
| 119 | `ec2cfc7` | — | fix(silhouette): exclude the point itself from its own cluster mean (#849) | 3 | 2 | 290 | 299 |
| 120 | `2363d93` | v7.12.0 | Version Packages (#856) | 0 | 0 | 290 | 299 |
| 127 | `5ee3e8b` | v7.12.1 | Version Packages (#867) | 0 | 0 | 290 | 299 |

The full 134-row curve, per-test first death, and killer breakdown are in the aggregate files below. The failure-kind breakdown uses recorded LLM messages and the developer TAP `notOkCount` heuristic stated in `survival-summary.md`; it is a descriptive classification, not a manual contract review.

## ESM switch and sanity checks

At #81 (v7.9.2), `exports.require` was `./dist/simple-statistics.js`; at #82 and #83 (v7.9.3), it was `./dist/simple-statistics.cjs`. Each row built successfully with 298/305 LLM point passes, 301/309 developer point subtests OK, and **zero load failures** in either corpus. The external runners survived `"type": "module"` and the `.cjs` rename.

The aggregation passed: t row 305/309; 133 result directories; 15 tagged rows; monotone cumulative counts; and exact per-test point-status equality at commits with no `src/`, `test/`, or package change. Across all 133 commits there were **zero** LLM or developer load failures.

## Coverage at t

All groups used nyc from testpilot2 against the built t package, with the same source-map attribution to 90 `src/*.js` files. The execution filter included `dist/simple-statistics.js`; the `nyc report` pass omitted that filter so remapped `src/` paths were retained. A single S Mocha invocation had 305 passes and zero failures, matching the t row; all 70 developer files exited 0.

| Group | Statements | Statement % | Branches | Branch % | Functions % | Lines % |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Loading only | 26/995 | 2.61 | 0/355 | 0 | 0.8 | 2.61 |
| S | 949/995 | 95.37 | 324/355 | 91.26 | 97.6 | 95.41 |
| Dev | 992/995 | 99.69 | 344/355 | 96.9 | 100 | 99.67 |
| Paper loading | — | 2.6 | — | 0.0 | — | — |
| Paper S | — | 87.8 | — | 71.3 | — | — |

S covers no `src/` file that Dev does not. Dev covers three files that S does not: `chi_squared_goodness_of_fit.js`, `logit.js`, and `probit.js`. Each `coverage-final.json` is under 0.2 MB; per-source statement percentages are in `coverage-t.md`.

## Deviations and open questions

`docs/deviations.md` continues the register through D-10. D-06 removes Compose’s explicit `.env` service entry; D-08 records that early Compose starts may still have auto-loaded the project `.env` for interpolation, although no command directly opened or printed it and no model call occurred. Recovery and final Compose launches passed `--env-file /dev/null`. D-07 records a direct-execution permission error at the t runner, resolved by calling it with `bash`. D-09/D-10 record the pnpm first attempts and authorized recovery.

Open for the report: classify the six observed killing commits by contract change versus message or format change; the current event and killer files give the affected tests and commit subjects but do not decide that interpretation. No developer load failure occurred, so there is no observed packaging artefact to classify; retain the packaging question if this method is reused on another corpus. The difference between this S coverage and the paper’s S coverage needs comparison in the paper context, not a claim of exact replication.

## Exact report source paths

- Commit range and metadata: `results/commits.txt`, `results/commits.csv`.
- Fixed S identity and API: `results/gen-passing.json`; t developer denominator: `results/dev-t/subtests-baseline.csv`.
- Anchor and each commit: `results/survival/000-31f037dd/` and `results/survival/<nnn>-<sha7>/status.json`, `commit.txt`, `steps.log`, `llm/summary.csv`, `dev/summary.md`, `dev/summary.json`, `dev/dev-subtests.csv`.
- Survival tables and plotted values: `results/survival-by-commit.csv`, `results/survival-events.csv`, `results/survival-killers.csv`, `results/survival-per-test.csv`, `results/survival-step.csv`, `results/survival-step.svg`, `results/survival-summary.md`.
- Coverage: `results/coverage-t/coverage-t.md` and `results/coverage-t/{loading,llm,dev}/coverage-summary.json` plus `coverage-final.json` in each group.
- Command, batch, and monitor timings: `docs/log-part3.md`. First-attempt pnpm evidence stays local at ignored `results/survival-attempt1/` and is excluded from report inputs.
