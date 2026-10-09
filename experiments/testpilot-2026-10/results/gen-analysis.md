# Generation analysis

Runs: `gen-full-run2`. All counts derive from saved artifacts. Refiner combinations are the distinct immediate provenance labels of a prompt, as in the zod analyzer. A deduplicated test may trace to several prompts and is counted once per distinct combination, so combination rows can overlap.

| Metric | Value |
| --- | --- |
| functions | 89 |
| functionsWithTests | 89 |
| functionsWithPasses | 87 |
| prompts | 491 |
| tests | 576 |
| passingTests | 305 |
| passRate | 53.0% |
| invalidSyntaxFailures | 100 |
| suspiciousTests | 1 |

## Per function

| API | Prototype method | Tests | Passing |
| --- | --- | --- | --- |
| simple-statistics.BayesianClassifier |  | 5 | 3 |
| simple-statistics.BayesianClassifier.prototype.train | yes | 6 | 2 |
| simple-statistics.BayesianClassifier.prototype.score | yes | 8 | 2 |
| simple-statistics.PerceptronModel |  | 5 | 3 |
| simple-statistics.PerceptronModel.prototype.predict | yes | 6 | 3 |
| simple-statistics.PerceptronModel.prototype.train | yes | 5 | 3 |
| simple-statistics.addToMean |  | 4 | 4 |
| simple-statistics.approxEqual |  | 6 | 2 |
| simple-statistics.average |  | 5 | 4 |
| simple-statistics.averageSimple |  | 5 | 4 |
| simple-statistics.bernoulliDistribution |  | 5 | 4 |
| simple-statistics.binomialDistribution |  | 5 | 3 |
| simple-statistics.bisect |  | 4 | 4 |
| simple-statistics.chiSquaredGoodnessOfFit |  | 23 | 0 |
| simple-statistics.chunk |  | 4 | 4 |
| simple-statistics.ckmeans |  | 11 | 8 |
| simple-statistics.coefficientOfVariation |  | 5 | 4 |
| simple-statistics.combinations |  | 3 | 1 |
| simple-statistics.combinationsReplacement |  | 5 | 3 |
| simple-statistics.combineMeans |  | 4 | 4 |
| simple-statistics.combineVariances |  | 6 | 2 |
| simple-statistics.cumulativeStdLogisticProbability |  | 5 | 4 |
| simple-statistics.cumulativeStdNormalProbability |  | 7 | 2 |
| simple-statistics.equalIntervalBreaks |  | 4 | 4 |
| simple-statistics.erf |  | 6 | 4 |
| simple-statistics.extent |  | 5 | 4 |
| simple-statistics.extentSorted |  | 5 | 4 |
| simple-statistics.factorial |  | 5 | 4 |
| simple-statistics.gamma |  | 6 | 3 |
| simple-statistics.gammaln |  | 5 | 4 |
| simple-statistics.geometricMean |  | 5 | 3 |
| simple-statistics.harmonicMean |  | 6 | 4 |
| simple-statistics.interquartileRange |  | 7 | 3 |
| simple-statistics.inverseErrorFunction |  | 8 | 1 |
| simple-statistics.kMeansCluster |  | 6 | 2 |
| simple-statistics.kde |  | 6 | 2 |
| simple-statistics.linearRegression |  | 8 | 8 |
| simple-statistics.linearRegressionLine |  | 8 | 8 |
| simple-statistics.logAverage |  | 5 | 4 |
| simple-statistics.logit |  | 39 | 0 |
| simple-statistics.mad |  | 5 | 4 |
| simple-statistics.max |  | 4 | 4 |
| simple-statistics.maxSorted |  | 4 | 4 |
| simple-statistics.median |  | 5 | 4 |
| simple-statistics.medianSorted |  | 6 | 4 |
| simple-statistics.min |  | 5 | 4 |
| simple-statistics.minSorted |  | 4 | 4 |
| simple-statistics.mode |  | 6 | 4 |
| simple-statistics.modeFast |  | 6 | 4 |
| simple-statistics.modeSorted |  | 7 | 3 |
| simple-statistics.numericSort |  | 4 | 4 |
| simple-statistics.permutationTest |  | 6 | 3 |
| simple-statistics.permutationsHeap |  | 4 | 4 |
| simple-statistics.poissonDistribution |  | 8 | 3 |
| simple-statistics.probit |  | 50 | 1 |
| simple-statistics.product |  | 4 | 4 |
| simple-statistics.quantile |  | 6 | 3 |
| simple-statistics.quantileRank |  | 6 | 3 |
| simple-statistics.quantileRankSorted |  | 6 | 2 |
| simple-statistics.quantileSorted |  | 6 | 4 |
| simple-statistics.quickselect |  | 5 | 3 |
| simple-statistics.rSquared |  | 4 | 4 |
| simple-statistics.relativeError |  | 5 | 4 |
| simple-statistics.rms |  | 4 | 4 |
| simple-statistics.sample |  | 6 | 2 |
| simple-statistics.sampleCorrelation |  | 5 | 3 |
| simple-statistics.sampleCovariance |  | 4 | 4 |
| simple-statistics.sampleKurtosis |  | 4 | 4 |
| simple-statistics.sampleRankCorrelation |  | 8 | 3 |
| simple-statistics.sampleSkewness |  | 5 | 3 |
| simple-statistics.sampleStandardDeviation |  | 6 | 3 |
| simple-statistics.sampleVariance |  | 4 | 4 |
| simple-statistics.sampleWithReplacement |  | 4 | 4 |
| simple-statistics.shuffle |  | 4 | 4 |
| simple-statistics.shuffleInPlace |  | 6 | 4 |
| simple-statistics.sign |  | 5 | 3 |
| simple-statistics.silhouette |  | 8 | 2 |
| simple-statistics.silhouetteMetric |  | 7 | 2 |
| simple-statistics.standardDeviation |  | 6 | 3 |
| simple-statistics.subtractFromMean |  | 4 | 4 |
| simple-statistics.sum |  | 5 | 4 |
| simple-statistics.sumNthPowerDeviations |  | 4 | 4 |
| simple-statistics.sumSimple |  | 4 | 4 |
| simple-statistics.tTest |  | 7 | 3 |
| simple-statistics.tTestTwoSample |  | 5 | 3 |
| simple-statistics.uniqueCountSorted |  | 4 | 4 |
| simple-statistics.variance |  | 5 | 3 |
| simple-statistics.wilcoxonRankSum |  | 6 | 4 |
| simple-statistics.zScore |  | 4 | 4 |

## Failure categories

| Category | Failing tests |
| --- | --- |
| assertion | 116 |
| file-system | 0 |
| correctness | 129 |
| timeout | 5 |
| other | 21 |

`Invalid syntax` is included in correctness: **100** tests.

## Recorded prompt provenance

| Combination | Prompts | Tests tracing here | Passing tests tracing here |
| --- | --- | --- | --- |
| base | 89 | 108 | 33 |
| doc comment | 88 | 102 | 63 |
| doc comment + body | 88 | 104 | 70 |
| doc comment + body + snippets | 3 | 3 | 3 |
| doc comment + snippets | 3 | 3 | 2 |
| body | 89 | 108 | 69 |
| body + snippets | 3 | 3 | 2 |
| retry | 125 | 149 | 61 |
| snippets | 3 | 3 | 2 |

## Possible package stubs or other requires

**1** test files match the source scan. The scan looks for assignment to `simple_statistics` or one of its properties, or a `require(...)` outside mocha, assert, and simple-statistics. These are candidates for manual inspection, not confirmed stubs.

| Run | Test file | API | Reason |
| --- | --- | --- | --- |
| gen-full-run2 | test_432.js | simple-statistics.quickselect | other require: simple-statistics/src/quickselect |

