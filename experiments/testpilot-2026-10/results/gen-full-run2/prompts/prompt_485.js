Your task is to write a test for the following function
```
// 
This function calculates the Wilcoxon rank sum statistic for the first sample
// with respect to the second. The Wilcoxon rank sum test is a non-parametric
// alternative to the t-test which is equivalent to the
// [Mann-Whitney U test](https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U_test).
// The statistic is calculated by pooling all the observations together, ranking them,
// and then summing the ranks associated with one of the samples. If this rank sum is
// sufficiently large or small we reject the hypothesis that the two samples come
// from the same distribution in favor of the alternative that one is shifted with
// respect to the other.
// @param {Array<number>} sampleX a sample as an array of numbers
// @param {Array<number>} sampleY a sample as an array of numbers
// @returns {number} rank sum for sampleX
// @example
// wilcoxonRankSum([1, 4, 8], [9, 12, 15]); // => 6

simple-statistics.wilcoxonRankSum(sampleX, sampleY)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.wilcoxonRankSum', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```