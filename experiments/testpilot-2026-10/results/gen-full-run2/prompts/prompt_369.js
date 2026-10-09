Your task is to write a test for the following function
```
// The [correlation](http://en.wikipedia.org/wiki/Correlation_and_dependence) is
// a measure of how correlated two datasets are, between -1 and 1
// @param {Array<number>} x first input
// @param {Array<number>} y second input
// @returns {number} sample correlation
// @example
// sampleCorrelation([1, 2, 3, 4, 5, 6], [2, 2, 3, 4, 5, 60]).toFixed(2);
// // => '0.69'

simple-statistics.sampleCorrelation(x, y)
```

This function is defined as follows:
```
function sampleCorrelation(x, y) {
    var cov = sampleCovariance(x, y);
    var xstd = sampleStandardDeviation(x);
    var ystd = sampleStandardDeviation(y);

    return cov / xstd / ystd;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCorrelation', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```