Your task is to write a test for the following function
```
// The [R Squared](http://en.wikipedia.org/wiki/Coefficient_of_determination)
// value of data compared with a function `f`
// is the sum of the squared differences between the prediction
// and the actual value.
// @param {Array<Array<number>>} x input data: this should be doubly-nested
// @param {Function} func function called on `[i][0]` values within the dataset
// @returns {number} r-squared value
// @example
// var samples = [[0, 0], [1, 1]];
// var regressionLine = linearRegressionLine(linearRegression(samples));
// rSquared(samples, regressionLine); // = 1 this line is a perfect fit

simple-statistics.rSquared(x, func)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.rSquared', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```