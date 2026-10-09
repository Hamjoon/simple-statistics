Your task is to write a test for the following function
```
// The [variance](http://en.wikipedia.org/wiki/Variance)
// is the sum of squared deviations from the mean.
// This is an implementation of variance, not sample variance:
// see the `sampleVariance` method if you want a sample measure.
// @param {Array<number>} x a population of one or more data points
// @returns {number} variance: a value greater than or equal to zero.
// zero indicates that all values are identical.
// @throws {Error} if x's length is 0
// @example
// variance([1, 2, 3, 4, 5, 6]); // => 2.9166666666666665

simple-statistics.variance(x)
```

This function is defined as follows:
```
function variance(x) {
    if (x.length === 0) {
        throw new Error("variance requires at least one data point");
    }

    // Find the mean of squared deviations between the
    // mean value and each value.
    return sumNthPowerDeviations(x, 2) / x.length;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.variance', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```