Your task is to write a test for the following function
```
// The [Z-Score, or Standard Score](http://en.wikipedia.org/wiki/Standard_score).
// The standard score is the number of standard deviations an observation
// or datum is above or below the mean. Thus, a positive standard score
// represents a datum above the mean, while a negative standard score
// represents a datum below the mean. It is a dimensionless quantity
// obtained by subtracting the population mean from an individual raw
// score and then dividing the difference by the population standard
// deviation.
// The z-score is only defined if one knows the population parameters;
// if one only has a sample set, then the analogous computation with
// sample mean and sample standard deviation yields the
// Student's t-statistic.
// @param {number} x
// @param {number} mean
// @param {number} standardDeviation
// @return {number} z score
// @example
// zScore(78, 80, 5); // => -0.4

simple-statistics.zScore(x, mean, standardDeviation)
```

This function is defined as follows:
```
function zScore(x, mean, standardDeviation) {
    return (x - mean) / standardDeviation;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.zScore', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```