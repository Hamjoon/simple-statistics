Your task is to write a test for the following function
```
// The [Median Absolute Deviation](http://en.wikipedia.org/wiki/Median_absolute_deviation) is
// a robust measure of statistical
// dispersion. It is more resilient to outliers than the standard deviation.
// @param {Array<number>} x input array
// @returns {number} median absolute deviation
// @example
// medianAbsoluteDeviation([1, 1, 2, 2, 4, 6, 9]); // => 1

simple-statistics.mad(x)
```

This function is defined as follows:
```
function medianAbsoluteDeviation(x) {
    var medianValue = median(x);
    var medianAbsoluteDeviations = [];

    // Make a list of absolute deviations from the median
    for (var i = 0; i < x.length; i++) {
        medianAbsoluteDeviations.push(Math.abs(x[i] - medianValue));
    }

    // Find the median value of that list
    return median(medianAbsoluteDeviations);
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.mad', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```