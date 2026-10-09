# TestPilot / simple-statistics Part 1: complete handover

## Scope and anchor

This completes environment setup, build at t, empty-mock API exploration, direct prompt-variant assembly, frozen developer-test baseline, and the nyc/Mocha probe. No LLM API was called; every benchmark runner invocation used `--responses` with `{"prompts": []}`. Generation and the 133-commit survival run were not started. The earlier [stop handover](handover-part1.md) remains as an audit record; the [review decisions](part1-review-decisions.md) resolve its population and tool-revision questions.

The simple-statistics anchor is `31f037dd5550d554c4a96c3ee35b12e10a1c9cb7` (2022-08-12 10:04:25 -0700), version 7.7.6. The fork has no `v7.7.6` tag. Both full and first-parent counts from the anchor to `origin/main` are 133. The unchanged testpilot2 checkout is `2c0581c` (2026-09-24), the revision used for the zod 124-function result: `31c0179` plus its six-line null-completion patch. The Docker image is `testpilot-ss:latest`, ID `sha256:79425779f00895ef104dc0919762a0219d7221b2c6c8e9f3455821cd04b35c19`. It runs Node 22.23.3, npm 10.9.9, yarn 1.22.22, and pnpm 12.10.1. No Node fallback was needed. The first exploration timing attempt failed because `/usr/bin/time` is absent; the successful retry used Bash `SECONDS`.

## Build and generation template

testpilot2's existing build supplied `dist/exploreAPI.js`, `benchmark/run.js`, Mocha, and nyc. `yarn install --frozen-lockfile` and `yarn build` succeeded for simple-statistics. The package resolves to `/work/ss/dist/simple-statistics.js`; `mean` and `BayesianClassifier` are callable and the package has 97 own exports. `dist/` has CommonJS JS (141301 bytes), MJS (139046), minified JS (23308), and three source maps (236524, 236425, 187352). The built CommonJS and MJS files each contain 109 `/**` openers. The explorer attaches nonempty comments to 88 API functions, so the doc-comment condition is realisable. The source scan also counted 109 openers; that corrects the original instruction's 193 figure.

The experiment's `template-singletest-doc.hb` differs from testpilot2's single-test template by one line immediately before `{{{signature}}}`:

```diff
2a3
> {{{docComments}}}
```

The retry template is an unchanged copy. SHA-256 hashes: doc template `286e9f25f8a07fb8cce61d906584d00789561ccbb7397c484443e8b62563cffd`; retry `873dde74d0a0165c8705e4ad4c849457d05de4bc07ad35154e131a1db287dd3e`; original single-test template `efe0c1c0d84c419a7ba897aca7fc5cb4bc6fd70469ec28940f3b1aceeefbbbb6`. Mocha 10.8.2 resolves from `/work/ss/node_modules/mocha/index.js`. Its installation modified upstream manifests and the README, which were restored; see [deviations.md](deviations.md).

## API exploration and prompt variants

| Condition | Template | Wall time | API functions | Snippet-bearing functions | Runner prompts | Generated tests |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Native documentation | Experiment single-test/doc | 1 s, rounded | 89 | 3 | 89 base | 0 |
| Native documentation | Original single-test | 1 s, rounded | 89 | 3 | 89 base | 0 |

Both runs' `api.json` and `snippetMap.json` files are byte-identical. The standalone raw explorer has 89 functions, matching the runner's API list. It also has 692 non-function entries (691 numbers and one array). The empty mock produced only base prompts, with empty provenance; that is expected because refiners run after a model completion yields a test. The tool applies refiners adaptively and stops for a function once one test passes. Thus a doc-comment variant is sent only if prior variants did not pass. This differs from the paper's every-variant procedure and should be disclosed in the report; the mechanism is unchanged from the zod experiment.

[build-prompt-examples.js](../scripts/build-prompt-examples.js) assembled three variants for each of `average`, `linearRegression`, and `BayesianClassifier.prototype.train` under each template: 9 files per tag, 18 total. For the doc template, each `doc` and `doc-body-snippets` variant places the rendered comment immediately above its signature in the first fenced block, while each base lacks it. Under the original template, base and doc variants are byte-identical. Only `linearRegression` has a `// usage #1` block in the combined variant. The directly assembled base files are byte-identical to runner prompts `prompt_8.js`, `prompt_36.js`, and `prompt_1.js`, respectively; copies beside the variants are named `*.runner-base.js`. The full average doc prompt is pasted in [log-part1.md](log-part1.md).

The population is exactly the 89 entries in `api.json`. It includes four prototype methods, two each for `BayesianClassifier` and `PerceptronModel`; all `isConstructor` flags are false because the built bundle exposes ES5-style functions. The callable `mean` export aliases the same function object as `average`, so the explorer records `average` once. The paper's Table 1 counts match: 89 functions, 88 with comments, three with examples, and three unique snippets. [api-summary.md](../results/api-summary.md) contains three full comment examples, snippet distribution, path and signature distributions, implementation lengths and duplicates, the complete non-function access-path list, prompt-example counts, and the paper comparison. [api-functions.csv](../results/api-functions.csv) has one sorted row per function. The snippet map stores text without Markdown source-file provenance.

## Frozen developer suite at t

The repository at this anchor contains **70** `test/*.test.js` files, rather than the 72 anticipated by the original instruction. All 70 were copied into `devrunner/tests`; the only edit in any file is replacement of the 71 occurrences of `"../dist/simple-statistics.js"` with `"simple-statistics"`. No other require target appeared. The runner's own tap 16.3.0 and random-js 2.1.0 are locked in `devrunner/package-lock.json`. Its ignored `node_modules/simple-statistics` symlink points to the repository root, and package-name resolution reaches `/work/ss/dist/simple-statistics.js`.

Running each file with plain Node took **6 rounded seconds**. All 70 exited 0; there were **1,024 `ok`**, **0 `not ok`**, and **309 `# Subtest:`** lines. No stderr file has content. [summary.md](../results/dev-t/summary.md) gives each file's counts; `summary.json`, TAP, stderr, exit codes, and timing are also saved. `npx tap --no-coverage -R tap tests/mean.test.js` exited 0. No developer test needed any change beyond the one require-string replacement.

## Harness probe

The hand-written [probe-test.js](../scripts/probe-test.js) ran through testpilot2's nyc/Mocha command at t. It exited 0 with **one pass, zero failures**, in **1 rounded second**. `results/probe/report.json` and `timing.txt` are committed. `coverage-final.json` is 150,146 bytes and maps to **90 `src/*.js` files** through source maps; it does not list the bundle's `dist/simple-statistics.js` separately. The coverage JSON remains ignored. The temporary `tests-probe` directory was removed. The observed run leaves several seconds below the 5-second validator limit, though later generated tests may take longer.

## Files, deviations, and open questions

All committed paths are under `experiments/testpilot-2026-10/`; [part1-committed-files.txt](part1-committed-files.txt) lists each file. There are no untracked files in the checkout after the final commit. The ignored `devrunner/node_modules/`, generated `dist/`, and probe coverage data remain local and are not committed. The preserved [deviation register](deviations.md) records the missing fork tag, Mocha installation, the original Step 4 stop, and the actual explorer population. The addendum's four decisions are in [part1-review-decisions.md](part1-review-decisions.md). No tracked file outside the experiment directory changed, and neither testpilot2 nor zod-testpilot was modified.

Questions for Gary before generation/reporting:

1. The review decision keeps the four prototype methods in the population. Should both constructor families be shown as a separate group in the paper-comparison table? The addendum called them three methods, but the explorer has four.
2. Should the report mention the two direct non-function exports (`epsilon` and `standardNormalTable`) in addition to the function population?
3. Does the roughly one-second probe provide sufficient headroom against the validator's 5-second limit for generated tests?
4. Are the rendered doc comments' length, formatting, and content acceptable before generation? The full average example in the log shows the actual format.

The command-by-command record and observed errors are in [log-part1.md](log-part1.md).
