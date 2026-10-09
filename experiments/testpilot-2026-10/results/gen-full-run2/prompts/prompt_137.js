Your task is to write a test for the following function
```
// **[Gaussian error function](http://en.wikipedia.org/wiki/Error_function)**
// The `errorFunction(x/(sd * Math.sqrt(2)))` is the probability that a value in a
// normal distribution with standard deviation sd is within x of the mean.
// 
This function returns a numerical approximation to the exact value.
// It uses Horner's method to evaluate the polynomial of τ (tau).
// @param {number} x input
// @return {number} error estimation
// @example
// errorFunction(1).toFixed(2); // => '0.84'

simple-statistics.erf(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.erf', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```