# TestPilot / simple-statistics Part 2: generation and control at t

## Fixed inputs and execution

The package remained at anchor `31f037dd5550d554c4a96c3ee35b12e10a1c9cb7`. `git diff --quiet 31f037dd HEAD -- src index.js package.json` passed before generation, the 89-entry API population was passed unchanged with `--api`, and the built CommonJS package and root Mocha 10.8.2 were present. testpilot2 stayed clean at `2c0581c`. The container ran Node 22.23.3 and received the key through an ignored `docker/.env`; the key was never printed. No model call was made outside the fixed generation script. The OpenRouter provider was not pinned, as in the zod run.

| Fixed file | SHA-256 |
| --- | --- |
| `templates/template-singletest-doc.hb` | `286e9f25f8a07fb8cce61d906584d00789561ccbb7397c484443e8b62563cffd` |
| `templates/retry-template.hb` | `873dde74d0a0165c8705e4ad4c849457d05de4bc07ad35154e131a1db287dd3e` |
| testpilot2 `templates/template-singletest.hb` | `efe0c1c0d84c419a7ba897aca7fc5cb4bc6fd70469ec28940f3b1aceeefbbbb6` |
| `results/explore-native/api.json` | `73823a84288e221df4cf78ee9bf8603c34b273ffde4dcd42109a1c36631d20b1` |
| two-function `results/api-smoke-2.json` | `053f9f88fedc5753f6f2b90db63cbfc18eced48bc92f889fcf70355e365b74a3` |
| `scripts/run-generation.sh` | `98ebd4a5513b0a54a7fdccde8cc61251f9b5bac725c8a20b0a2d49455131cc52` |

The smoke file holds unchanged `average` and `linearRegression` API entries. The generation settings in `run-generation.sh` were:

```text
--package /work/ss --model openai/gpt-oss-120b --template /work/ss/experiments/testpilot-2026-10/templates/template-singletest-doc.hb --retryTemplate /work/ss/experiments/testpilot-2026-10/templates/retry-template.hb --snippets doc --numSnippets 3 --snippetLength 20 --temperatures 0.0 --numCompletions 1 --maxTokens 4000 --nrAttempts 3 --timeLimit 36000
```

The script set `TESTPILOT_LLM_API_ENDPOINT` to `https://openrouter.ai/api/v1/chat/completions` and supplied its authorization header from the container environment without logging the value. Test execution used testpilot2's default 5,000 ms process limit. `report.json` records the following metadata, which does not include model, temperature, attempt count, or time limit:

```json
{
  "packageName": "simple-statistics",
  "useDocSnippets": true,
  "useCodeSnippets": false,
  "numSnippets": 3,
  "snippetLength": 20,
  "numCompletions": 1
}
```

## Smoke and authoritative full run

The live two-function smoke exited 0 in **87 seconds**. It wrote 13 prompts and 13 tests, of which 11 passed. There were no failed requests, null completions, invalid-syntax failures, empty completions, or unclosed fenced code blocks. Six prompts carried `DocCommentIncluder`; three inspected prompt files showed the comment above the signature. All five smoke gates passed. Smoke tests are not part of the passing set S.

The requested detached host launch of `gen-full` exited before creating a container or result directory, with an empty host log. The instructed fallback `gen-full-run2` ran in a persistent shell session and is the **sole authoritative full run**. It exited 0 after **6,819 seconds** (1 hour 53 minutes 39 seconds), below the explicit ten-hour limit. There is no `gen-full` directory and no tail run.

| Full-run metric | Result |
| --- | ---: |
| API functions | 89 |
| Prompt files | 491 |
| Generated tests | 576 |
| Passing S | 305 |
| Failing | 271 |
| Pass rate | 52.95% |
| Functions with a passing test | 87 |

The two functions without a passing test are `chiSquaredGoodnessOfFit` and `logit`. `stdout.txt` has **zero** “Failed to get completions” lines and **one** `Null completion (finish_reason=length)` at prompt **389**, the function-body refinement for `sampleSkewness`. This is below the specified seven-request limit. It yielded an empty completion; the run continued and later generated a passing test for that function. The saved `report.json`, `prompts.json`, prompt files, and test files are under `results/gen-full-run2/`.

The generated `api.json` has the same 89 access paths in the same order as the frozen population. All **89/89** provenance-empty base prompt files are byte-identical to their Part 1 counterparts. There are **182** prompts with `DocCommentIncluder` provenance, reaching **88** functions. Prompt IDs 2, 7, and 13 were inspected and contain the comments above the signatures of `BayesianClassifier`, `BayesianClassifier.prototype.train`, and `BayesianClassifier.prototype.score`. Thirty-three functions have a passing test traced to a base prompt, yet all 33 also reached a doc-comment prompt; **zero** base-pass functions avoided the doc-comment condition. The Part 1 handover's claim that refinement stops after a pass was too strong: the source enqueues refinements before breaking the inner completion loop, and the outer prompt worklist continues. [D-05](deviations.md) records this corrected interpretation.

## Saved analysis and comparison

[gen-analysis.md](../results/gen-analysis.md) and [gen-analysis.json](../results/gen-analysis.json) give per-function counts and the full provenance table. The analyzer uses the zod experiment's failure-category precedence and immediate-provenance combinations; a deduplicated test can trace to more than one combination. [gen-tests.csv](../results/gen-tests.csv) has a `run` column and one row per test. [gen-passing.json](../results/gen-passing.json) contains the 305 report-ordered S entries, each identified by `(run, testFile)`.

| Recorded combination | Prompts | Passing tests tracing here |
| --- | ---: | ---: |
| Base | 89 | 33 |
| DocCommentIncluder | 88 | 63 |
| DocCommentIncluder + FunctionBodyIncluder | 88 | 70 |
| DocCommentIncluder + FunctionBodyIncluder + SnippetIncluder | 3 | 3 |
| DocCommentIncluder + SnippetIncluder | 3 | 2 |
| FunctionBodyIncluder | 89 | 69 |
| FunctionBodyIncluder + SnippetIncluder | 3 | 2 |
| RetryWithError | 125 | 61 |
| SnippetIncluder | 3 | 2 |

The 271 failing tests classify as **116 assertion**, **0 file-system**, **129 correctness** (including **100 `Invalid syntax`**), **5 timeout**, and **21 other**. The timeout failures report Mocha's 2,000 ms callback timeout (four `chiSquaredGoodnessOfFit`, one `probit`); this is within the outer 5,000 ms validator limit. Most “other” messages are uncaught documented input errors. The source scan found **zero** direct package-object reassignments or stubs and **one** test with an extra require: `test_432.js` imports `simple-statistics/src/quickselect` and fails because that subpath is not exported. The earlier scan's `===` and ordinary import false positives were corrected before these counts were saved.

[gen-vs-paper.md](../results/gen-vs-paper.md) places this run's 576 tests, 305 passing, and 52.95% pass rate next to the paper's 353 tests, 250 passing, and 70.9%. The paper's statement 87.8% and branch 71.3% coverage are shown with this run's coverage marked **Part 3**. This is descriptive: the tool revision, model, and adaptive prompt traversal differ.

## Control at t and package hygiene

Package self-reference from `/work/ss/tests-llm` resolves to `/work/ss/dist/simple-statistics.js`; no copied test required a require rewrite. [run-generated-tests.sh](../scripts/run-generated-tests.sh) ran all 305 S entries alone under Mocha against the built package. It exited 0 in **90 seconds**: **305/305 `pass`**, median Mocha duration **1 ms**. [summary.csv](../results/control-t/summary.csv) and 305 per-test JSON files preserve the results. All stderr files were empty and are excluded from the commit. The temporary `tests-llm` directory was removed. The frozen developer baseline was rerun after generation: **70 files, zero failures**, six seconds.

The generation tool left two `test-*` directories and a root `.nyc_output`; they were removed after completion. `git status --porcelain` then showed only experiment paths. `coverageData/` is ignored and excluded from the commit. A credential-pattern scan of **2,039** new result files, including ignored coverage data, found **zero** strings matching `sk-or-v1-` plus 20 or more characters. The `.env` file is ignored and excluded. The package source, testpilot2 checkout, and zod checkout were not changed.

## Deviations and decisions before Part 3

The [deviation register](deviations.md) continues Part 1 with D-04 (detached launcher exited before creating an output directory; `gen-full-run2` fallback) and D-05 (corrected prompt-refinement interpretation). The full run has one null completion but otherwise meets the request-failure gate. S remains all 305 tests with `PASSED` status in the tool report, and the independent control reproduces all of them at t.

Questions for the report and Part 3 handover:

1. Should the single `finish_reason=length` null completion be reported separately from ordinary request failures? It affected prompt 389 but did not stop that function from getting a passing test.
2. Should the explicit ten-hour time limit be stated in the report even though this run finished in under two hours?
3. The deep-import failure and five callback timeouts appear to arise from generated tests; should any be classified as a harness limitation in addition to the model failure categories?

Part 3's 133-commit survival run and coverage measurement have not started.
