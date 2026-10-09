Your task is to write a test for the following function
```
// This is to compute [a one-sample t-test](https://en.wikipedia.org/wiki/Student%27s_t-test#One-sample_t-test), comparing the mean
// of a sample to a known value, x.
// in this case, we're trying to determine whether the
// population mean is equal to the value that we know, which is `x`
// here. Usually the results here are used to look up a
// [p-value](http://en.wikipedia.org/wiki/P-value), which, for
// a certain level of significance, will let you determine that the
// null hypothesis can or cannot be rejected.
// @param {Array<number>} x sample of one or more numbers
// @param {number} expectedValue expected value of the population mean
// @returns {number} value
// @example
// tTest([1, 2, 3, 4, 5, 6], 3.385).toFixed(2); // => '0.16'

simple-statistics.tTest(x, expectedValue)
```

This function is defined as follows:
```
function tTest(x, expectedValue) {
    // The mean of the sample
    var sampleMean = mean(x);

    // The standard deviation of the sample
    var sd = standardDeviation(x);

    // Square root the length of the sample
    var rootN = Math.sqrt(x.length);

    // returning the t value
    return (sampleMean - expectedValue) / (sd / rootN);
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.tTest', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```