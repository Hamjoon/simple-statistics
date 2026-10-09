Your task is to write a test for the following function
```
// The`coefficient of variation`_ is the ratio of the standard deviation to the mean.
// .._`coefficient of variation`: https://en.wikipedia.org/wiki/Coefficient_of_variation
// @param {Array} x input
// @returns {number} coefficient of variation
// @example
// coefficientOfVariation([1, 2, 3, 4]).toFixed(3); // => 0.516
// coefficientOfVariation([1, 2, 3, 4, 5]).toFixed(3); // => 0.527
// coefficientOfVariation([-1, 0, 1, 2, 3, 4]).toFixed(3); // => 1.247

simple-statistics.coefficientOfVariation(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.coefficientOfVariation', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```