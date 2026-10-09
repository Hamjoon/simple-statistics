# TestPilot / simple-statistics Part 1: stopped after exploration

## Status and stopping reason

The environment and package build succeeded, and two API explorations ran with an empty mock response file and no model calls. The instructions require doc-comment, snippet, and body prompt variants to be checked in Step 4. Neither run produced any: all 89 prompt records have empty provenance, and the doc and no-doc prompt files are identical. In `testpilot2/src/generateTests.ts`, the refiner worklist is populated only while iterating over model completions. The prescribed empty mock supplies none. Ground Rule 4 has no fallback for this mismatch, so Steps 5–8 (developer baseline, harness probe, API summary, final push) were not started.

## Anchor, tool, and environment

| Item | Observed value |
| --- | --- |
| simple-statistics anchor | `31f037dd5550d554c4a96c3ee35b12e10a1c9cb7`, 2022-08-12 10:04:25 -0700 |
| Fork tag at anchor | none; `git tag --points-at HEAD` printed nothing, although `package.json` is version 7.7.6 |
| Following commits on `origin/main` | 133, also 133 with `--first-parent` |
| testpilot2 checkout | clean `experiment/2026-09-week3-zod` at `2c0581c` (2026-09-24), not expected `31c0179`; diff from `79c3b626` includes a six-line `src/chatmodel.ts` addition and the generic template sentence |
| Docker image | `testpilot-ss:latest`, `sha256:79425779f00895ef104dc0919762a0219d7221b2c6c8e9f3455821cd04b35c19` |
| Versions | Node 22.23.3; npm 10.9.9; yarn 1.22.22; pnpm 12.10.1 |

No Node version fallback was needed. The first timing attempt failed because the image lacks `/usr/bin/time`; Bash `SECONDS` was used on retry. Compose printed a warning about unrelated orphan containers; they were not touched.

## Template and build

The experiment template differs from testpilot2's single-test template by exactly one line before `{{{signature}}}`:

```diff
2a3
> {{{docComments}}}
```

SHA-256: experiment single-test/doc template `286e9f25f8a07fb8cce61d906584d00789561ccbb7397c484443e8b62563cffd`; copied retry template `873dde74d0a0165c8705e4ad4c849457d05de4bc07ad35154e131a1db287dd3e`; source single-test template `efe0c1c0d84c419a7ba897aca7fc5cb4bc6fd70469ec28940f3b1aceeefbbbb6`.

testpilot2's existing build had all four required artifacts, so it was not rebuilt. `yarn install --frozen-lockfile` and `yarn build` succeeded on simple-statistics. `dist/` contains CommonJS JS (141301 bytes), MJS (139046), minified JS (23308), and three maps (236524, 236425, 187352). The package resolves to `/work/ss/dist/simple-statistics.js`; `mean` and `BayesianClassifier` are callable, and the package has 97 own exports. Built JS and MJS each contain 109 `/**` openers. A source scan also counted 109, contrary to the 193 in the instructions. Mocha 10.8.2 resolves from `/work/ss/node_modules/mocha/index.js`. Its install changed `package.json`, `yarn.lock`, and `README.md`; all were restored. Details are in [deviations.md](deviations.md).

## Exploration data

| Condition | Template | Wall time | API functions | Functions with snippets | Prompt files | Test count |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| native docs | experiment single-test/doc | 1 s (Bash rounded) | 89 | 3 | 89 | 0 |
| native docs | testpilot2 single-test | 1 s (Bash rounded) | 89 | 3 | 89 | 0 |

Both runs used `--responses` pointing to `{"prompts": []}`, `--strictResponses false`, and the specified generation settings. Their `api.json` and `snippetMap.json` files are byte-identical. The standalone raw explorer recorded 89 functions, matching `api.json`, plus 691 number entries and one array entry. API comments are nonempty for 88 of 89 functions. The three snippet-bearing names are `ckmeans` (two snippets), `linearRegression` (one), and `linearRegressionLine` (one). All `isConstructor` and `isAsync` flags are false. The run reports three unique snippets. Both prompt directories are byte-identical and every prompt has empty provenance; there is no doc-comment prompt example to paste. For example, the base `average` prompt is [prompt_8.js](../results/explore-native/prompts/prompt_8.js), and its corresponding API descriptor has a doc comment, but the prompt contains only the signature and skeleton.

The explorer includes `BayesianClassifier.prototype.train` and other prototype methods despite the supplied description saying prototypes are not walked. It omits the callable top-level `mean` export, apparently because `average` shares it; no `simple-statistics.mean` prompt exists. A requested constructor prompt example cannot be selected because no `isConstructor` flag is true. These population details need review before generation.

The runner left two temporary directories, `test-iZIlyf` and `test-JHjiD8`; both were removed. No `test-*` directory remains. `git status` shows only files under `experiments/testpilot-2026-10/`.

## Deferred work and decisions for Gary

The developer test runner, 72-file baseline, harness probe, API summary/CSV, and prompt-example copies are not available because work stopped at Step 4. No branch push was made. The current exploration artifacts are committed locally as an interim checkpoint.

1. How should refiner prompts be obtained without a model call? The empty-response procedure cannot produce them; a revised mock strategy or direct prompt construction would be needed.
2. Should the actual explorer population stand, including prototype methods and no flagged constructors, or should the tool/version and API filtering be adjusted? How should the missing `mean` alias be represented?
3. Should the raw explorer's non-function exports be mentioned in the report?
4. The 5-second nyc/Mocha headroom remains unmeasured until the probe is authorized in a revised Part 1 instruction.
5. Doc-comment length, formatting, and noise in refined prompts cannot be assessed until such prompts exist.

The full command record, outcomes, and the expected generic template diff are in [log-part1.md](log-part1.md). No LLM API was called, no `.env` was created, and no file under the zod checkout was touched.

The final diff check reports trailing whitespace inherited from the copied templates and repeated verbatim in generated prompt/stdout artifacts. Those artifacts were preserved for reproducibility.
