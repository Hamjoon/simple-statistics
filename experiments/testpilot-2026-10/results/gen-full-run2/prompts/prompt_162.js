Your task is to write a test for the following function
```
// Compute the logarithm of the [gamma function](https://en.wikipedia.org/wiki/Gamma_function) of a value using Lanczos' approximation.
// 
This function takes as input any real-value n greater than 0.
// This function is useful for values of n too large for the normal gamma function (n > 165).
// The code is based on Lanczo's Gamma approximation, defined [here](http://my.fit.edu/~gabdo/gamma.txt).
// @param {number} n Any real number greater than zero.
// @returns {number} The logarithm of gamma of the input value.
// @example
// gammaln(500); // 2605.1158503617335
// gammaln(2.4); // 0.21685932244884043

simple-statistics.gammaln(n)
```
This function is defined as follows:
```
function gammaln(n) {
    // Return infinity if value not in domain
    if (n <= 0) {
        return Infinity;
    }

    // Decrement n, because approximation is defined for n - 1
    n--;

    // Create series approximation
    var a = COEFFICIENTS[0];

    for (var i = 1; i < 15; i++) {
        a += COEFFICIENTS[i] / (n + i);
    }

    var tmp = g + 0.5 + n;

    // Return natural logarithm of gamma(n)
    return LOGSQRT2PI + Math.log(a) - tmp + (n + 0.5) * Math.log(tmp);
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.gammaln', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```