Your task is to write a test for the following function
```
// The [Interquartile range](http://en.wikipedia.org/wiki/Interquartile_range) is
// a measure of statistical dispersion, or how scattered, spread, or
// concentrated a distribution is. It's computed as the difference between
// the third quartile and first quartile.
// @param {Array<number>} x sample of one or more numbers
// @returns {number} interquartile range: the span between lower and upper quartile,
// 0.25 and 0.75
// @example
// interquartileRange([0, 1, 2, 3]); // => 2

simple-statistics.interquartileRange(x)
```

This function is defined as follows:
```
function interquartileRange(x) {
    // Interquartile range is the span between the upper quartile,
    // at `0.75`, and lower quartile, `0.25`
    var q1 = quantile(x, 0.75);
    var q2 = quantile(x, 0.25);

    if (typeof q1 === "number" && typeof q2 === "number") {
        return q1 - q2;
    }
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.interquartileRange', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```