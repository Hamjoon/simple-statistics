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
This function is defined as follows:
```
function errorFunction(x) {
    var t = 1 / (1 + 0.5 * Math.abs(x));
    var tau =
        t *
        Math.exp(
            -x * x +
                ((((((((0.17087277 * t - 0.82215223) * t + 1.48851587) * t -
                    1.13520398) *
                    t +
                    0.27886807) *
                    t -
                    0.18628806) *
                    t +
                    0.09678418) *
                    t +
                    0.37409196) *
                    t +
                    1.00002368) *
                    t -
                1.26551223
        );
    if (x >= 0) {
        return 1 - tau;
    } else {
        return tau - 1;
    }
}
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