Your task is to write a test for the following function
```
// [Simple linear regression](http://en.wikipedia.org/wiki/Simple_linear_regression)
// is a simple way to find a fitted line
// between a set of coordinates. This algorithm finds the slope and y-intercept of a regression line
// using the least sum of squares.
// @param {Array<Array<number>>} data an array of two-element of arrays,
// like `[[0, 1], [2, 3]]`
// @returns {Object} object containing slope and intersect of regression line
// @example
// linearRegression([[0, 0], [1, 1]]); // => { m: 1, b: 0 }

simple-statistics.linearRegression(data)
```

You may use the following examples to guide your implementation:
```
// usage #1
var line = ss.linearRegressionLine(ss.linearRegression([[0, 0], [1, 1]]));line(0); // 0
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```