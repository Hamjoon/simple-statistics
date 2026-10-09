Your task is to write a test for the following function
```
// [Skewness](http://en.wikipedia.org/wiki/Skewness) is
// a measure of the extent to which a probability distribution of a
// real-valued random variable "leans" to one side of the mean.
// The skewness value can be positive or negative, or even undefined.
// Implementation is based on the adjusted Fisher-Pearson standardized
// moment coefficient, which is the version found in Excel and several
// statistical packages including Minitab, SAS and SPSS.
// @since 4.1.0
// @param {Array<number>} x a sample of 3 or more data points
// @returns {number} sample skewness
// @throws {Error} if x has length less than 3
// @example
// sampleSkewness([2, 4, 6, 3, 1]); // => 0.590128656384365

simple-statistics.sampleSkewness(x)
```

This function is defined as follows:
```
function sampleSkewness(x) {
    if (x.length < 3) {
        throw new Error("sampleSkewness requires at least three data points");
    }

    var meanValue = mean(x);
    var tempValue;
    var sumSquaredDeviations = 0;
    var sumCubedDeviations = 0;

    for (var i = 0; i < x.length; i++) {
        tempValue = x[i] - meanValue;
        sumSquaredDeviations += tempValue * tempValue;
        sumCubedDeviations += tempValue * tempValue * tempValue;
    }

    // this is Bessels' Correction: an adjustment made to sample statistics
    // that allows for the reduced degree of freedom entailed in calculating
    // values from samples rather than complete populations.
    var besselsCorrection = x.length - 1;

    // Find the mean value of that list
    var theSampleStandardDeviation = Math.sqrt(
        sumSquaredDeviations / besselsCorrection
    );

    var n = x.length;
    var cubedS = Math.pow(theSampleStandardDeviation, 3);

    return (n * sumCubedDeviations) / ((n - 1) * (n - 2) * cubedS);
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleSkewness', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```