Your task is to write a test for the following function
```
// The [sample variance](https://en.wikipedia.org/wiki/Variance#Sample_variance)
// is the sum of squared deviations from the mean. The sample variance
// is distinguished from the variance by the usage of [Bessel's Correction](https://en.wikipedia.org/wiki/Bessel's_correction):
// instead of dividing the sum of squared deviations by the length of the input,
// it is divided by the length minus one. This corrects the bias in estimating
// a value from a set that you don't know if full.
// References:
// * [Wolfram MathWorld on Sample Variance](http://mathworld.wolfram.com/SampleVariance.html)
// @param {Array<number>} x a sample of two or more data points
// @throws {Error} if the length of x is less than 2
// @return {number} sample variance
// @example
// sampleVariance([1, 2, 3, 4, 5]); // => 2.5

simple-statistics.sampleVariance(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleVariance', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```