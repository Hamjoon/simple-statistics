Your task is to write a test for the following function
```
// The [sample standard deviation](http://en.wikipedia.org/wiki/Standard_deviation#Sample_standard_deviation)
// is the square root of the sample variance.
// @param {Array<number>} x input array
// @returns {number} sample standard deviation
// @example
// sampleStandardDeviation([2, 4, 4, 4, 5, 5, 7, 9]).toFixed(2);
// // => '2.14'

simple-statistics.sampleStandardDeviation(x)
```

This function is defined as follows:
```
function sampleStandardDeviation(x) {
    var sampleVarianceX = sampleVariance(x);
    return Math.sqrt(sampleVarianceX);
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleStandardDeviation', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```