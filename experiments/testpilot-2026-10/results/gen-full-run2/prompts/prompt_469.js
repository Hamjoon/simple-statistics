Your task is to write a test for the following function
```
// This is to compute [two sample t-test](http://en.wikipedia.org/wiki/Student's_t-test).
// Tests whether "mean(X)-mean(Y) = difference", (
// in the most common case, we often have `difference == 0` to test if two samples
// are likely to be taken from populations with the same mean value) with
// no prior knowledge on standard deviations of both samples
// other than the fact that they have the same standard deviation.
// Usually the results here are used to look up a
// [p-value](http://en.wikipedia.org/wiki/P-value), which, for
// a certain level of significance, will let you determine that the
// null hypothesis can or cannot be rejected.
// `diff` can be omitted if it equals 0.
// [This is used to reject](https://en.wikipedia.org/wiki/Exclusion_of_the_null_hypothesis)
// a null hypothesis that the two populations that have been sampled into
// `sampleX` and `sampleY` are equal to each other.
// @param {Array<number>} sampleX a sample as an array of numbers
// @param {Array<number>} sampleY a sample as an array of numbers
// @param {number} [difference=0]
// @returns {number|null} test result
// @example
// tTestTwoSample([1, 2, 3, 4], [3, 4, 5, 6], 0); // => -2.1908902300206643

simple-statistics.tTestTwoSample(sampleX, sampleY, difference)
```

This function is defined as follows:
```
function tTestTwoSample(sampleX, sampleY, difference) {
    var n = sampleX.length;
    var m = sampleY.length;

    // If either sample doesn't actually have any values, we can't
    // compute this at all, so we return `null`.
    if (!n || !m) {
        return null;
    }

    // default difference (mu) is zero
    if (!difference) {
        difference = 0;
    }

    var meanX = mean(sampleX);
    var meanY = mean(sampleY);
    var sampleVarianceX = sampleVariance(sampleX);
    var sampleVarianceY = sampleVariance(sampleY);

    if (
        typeof meanX === "number" &&
        typeof meanY === "number" &&
        typeof sampleVarianceX === "number" &&
        typeof sampleVarianceY === "number"
    ) {
        var weightedVariance =
            ((n - 1) * sampleVarianceX + (m - 1) * sampleVarianceY) /
            (n + m - 2);

        return (
            (meanX - meanY - difference) /
            Math.sqrt(weightedVariance * (1 / n + 1 / m))
        );
    }
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.tTestTwoSample', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```