# Do LLM-generated tests survive code evolution? simple-statistics over 133 commits, 2022 to 2026

## Question

TestPilot (Schäfer et al., TSE 2024) generated tests for 25 npm packages at fixed commits. For one of them, `simple-statistics`, we generate tests at the paper's commit with a TestPilot-family tool, then run them unmodified at every later commit on `main`, side by side with the developers' own tests frozen at the same commit. Which commits break which tests, and how do the two test sets compare in coverage?

## Setup

- **Package and anchor.** `simple-statistics` (statistics library, plain JavaScript, 89 API functions) at the paper's commit `31f037dd` = v7.7.6 (2022-08-12), release *t*. The API explored by the tool matches the paper's Table 1 exactly: 89 functions, 88 with a doc comment, 3 with documentation examples.
- **Tests.** *LLM*: testpilot2 (chat-API follow-up of TestPilot) with `gpt-oss-120b`, temperature 0, one completion per prompt, prompts carrying the function signature, body, doc comment and documentation examples as in the paper, one retry with the error message. 576 tests generated, **305 passing at *t*** (53.0%), covering 87 of 89 functions. *Dev*: the developers' 70 test files at *t*, **309 subtests** (1,024 assertions), all passing. Neither set is edited afterwards; the Dev files load the package by name so that later packaging changes do not affect them.
- **Points.** All **133 commits** on `main` after *t*, up to 2026-10-01, none skipped; the history is linear. Every commit was built from its own source export. The 15 release tags in the range (v7.8.0 to v7.12.1) are among the 133.
- **Survival.** Cumulative over commits: a test survives at commit *c* if it passed at every commit from the first to *c*. Denominators fixed at *t* (305 and 309); the row for *t* is 100% by definition.
- **Coverage.** Statement and branch coverage at *t* over the 90 source files, measured the same way for both sets (nyc on the built bundle, mapped to source).

## Results

**Table 1. Surviving tests at the commits that broke a test, and at the release tags** (cell: count and percent of the fixed denominator; the full 134-row series is in the repository).

| # | Commit | Date | Change | Dev (309) | LLM (305) |
|---:|---|---|---|---:|---:|
| 0 | **v7.7.6** (*t*) | 2022-08-12 | | 309 (100%) | 305 (100%) |
| 3 | **v7.8.0** | 2022-10-26 | | 309 (100%) | 305 (100%) |
| 22 | **v7.8.3** | 2023-02-12 | | 309 (100%) | 305 (100%) |
| 64 | 8bb4ae7 | 2026-03-10 | fix: incorrect quantile computation | 301 (97.4%) | 298 (97.7%) |
| 66 | **v7.8.9** | 2026-03-10 | | 301 (97.4%) | 298 (97.7%) |
| 83 | **v7.9.3** | 2026-07-03 | package switched to ESM, CommonJS build renamed `.cjs` | 301 (97.4%) | 298 (97.7%) |
| 84 | 43e3439 | 2026-07-08 | fix(bayes): accumulate scores across all item properties | 301 (97.4%) | 297 (97.4%) |
| 86 | 0779f22 | 2026-08-07 | fix(rank-correlation): give tied values midranks | 301 (97.4%) | 296 (97.0%) |
| 104 | **v7.10.2** | 2026-08-19 | | 301 (97.4%) | 296 (97.0%) |
| 113 | b6debf9 | 2026-08-31 | fix(gamma): lift small arguments before the Nemes expansion | 301 (97.4%) | 294 (96.4%) |
| 114 | a48dc26 | 2026-08-31 | fix(perceptron): stop train from writing through to the caller's array | 301 (97.4%) | 293 (96.1%) |
| 119 | ec2cfc7 | 2026-09-07 | fix(silhouette): exclude the point itself from its own cluster mean | 299 (96.8%) | 290 (95.1%) |
| 127 | **v7.12.1** | 2026-09-27 | | 299 (96.8%) | 290 (95.1%) |
| 133 | 49ca7ea (HEAD) | 2026-10-01 | | **299 (96.8%)** | **290 (95.1%)** |

Rows for v7.8.1, v7.8.2, v7.9.0, v7.9.1, v7.9.2, v7.10.0, v7.10.1, v7.11.0 and v7.12.0 are omitted; none changed either count. No commit failed to build, and no test failed to load at any commit.

**Table 2. The six commits that broke tests** (all other 127 commits broke none).

| # | Change | Function(s) | Dev lost | LLM lost | Dev tests of the function at *t* |
|---:|---|---|---:|---:|---|
| 64 | quantile computation fixed | `quantile`, `quantileSorted`, `interquartileRange` | 8 | 7 | 12 subtests, 8 broke |
| 119 | silhouette excludes the point itself | `silhouette`, `silhouetteMetric` | 2 | 3 | 6 subtests, 2 broke |
| 113 | gamma for small arguments | `gamma` | 0 | 2 | 6 subtests, none broke |
| 84 | Bayesian classifier score accumulation | `BayesianClassifier.score` | 0 | 1 | 6 subtests, none broke |
| 114 | perceptron no longer mutates the caller's array | `PerceptronModel.train` | 0 | 1 | 7 subtests, none broke |
| 86 | rank correlation gives tied values midranks | `sampleRankCorrelation` | 0 | 1 | no test file |

Of the 25 losses, 22 are assertion failures and 3 are thrown errors (at #64, #113 and #114). The six commits all change a computed result; each also edits the function's own developer test file in the same commit.

**Table 3. Coverage of the 90 source files at *t*.**

| Group | Tests | Statements | Branches | Source files not reached |
|---|---:|---:|---:|---|
| Load only | | 26 / 995 (2.6%) | 0 / 355 (0.0%) | |
| LLM | 305 | 949 / 995 (95.4%) | 324 / 355 (91.3%) | 3: `chiSquaredGoodnessOfFit`, `logit`, `probit` |
| Dev | 309 | 992 / 995 (99.7%) | 344 / 355 (96.9%) | 0 |
| Paper LLM (Table 2 of the paper) | 250 | 87.8% | 71.3% | |

Every source file the LLM tests reach is also reached by Dev. The three files LLM does not reach belong to the two functions with no passing generated test (`chiSquaredGoodnessOfFit`, `logit`) and to `probit`.

## Observations

1. **Only behaviour-changing bug fixes broke tests; packaging and dependency changes broke none.** The six breaking commits are all `fix:` commits that change a computed value, and together they account for every loss (Dev 10, LLM 15). The other 127 commits, which include 15 releases, the switch from yarn to pnpm, the switch of the package to ES modules, and 48 dependency bumps, left both sets untouched.
2. **At four of the six commits, only LLM tests broke, although Dev had tests for three of the four functions.** For `gamma`, `BayesianClassifier.score` and `PerceptronModel.train`, the 6, 6 and 7 developer subtests all still pass after the fix; the generated tests asserted a value on an input the developers' tests did not use. For `sampleRankCorrelation` there is no developer test file at *t*. At the two commits where both sets broke (`quantile`, `silhouette`), the developers also rewrote their own tests in the same commit.
3. **LLM tests reach 95.4% of statements against 99.7% for Dev, and most of the gap is the three files no generated test reaches.** Of the 46 statements the LLM tests miss, 38 are in the three files of Table 3 (two of them belong to the functions with no passing generated test); the remaining 8 are single statements in eight other files.

## Limitations

- One generation run with one model; the LLM provider is not pinned, and the pass rate at *t* (53.0%) is below the paper's 70.9% with a different model and tool version, so the Paper LLM row is a reference, not a replication.
- Losses are classified from the recorded failure messages; whether each broken assertion reflected a documented contract or an incidental value was not reviewed by hand.
- Dev survival is counted per subtest (309); counting per assertion (1,024, of which 23 fail at HEAD) gives the same six breaking commits.

## Repository

`Hamjoon/simple-statistics`, branch `experiment/2026-10-week2-testpilot-simple-statistics`, directory `experiments/testpilot-2026-10/`. Commits: `results/commits.csv`. Generated tests and their status at *t*: `results/gen-passing.json`, `results/gen-analysis.md`. Survival series: `results/survival-by-commit.csv` (134 rows), `survival-events.csv`, `survival-killers.csv`, `survival-per-test.csv`, figure `survival-step.svg`. Coverage: `results/coverage-t/coverage-t.md`.
