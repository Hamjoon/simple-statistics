Your task is to write a test for the following function
```
// Compute the [gamma function](https://en.wikipedia.org/wiki/Gamma_function) of a value using Nemes' approximation.
// The gamma of n is equivalent to (n-1)!, but unlike the factorial function, gamma is defined for all real n except zero
// and negative integers (where NaN is returned). Note, the gamma function is also well-defined for complex numbers,
// though this implementation currently does not handle complex numbers as input values.
// Nemes' approximation is defined [here](https://arxiv.org/abs/1003.6020) as Theorem 2.2.
// Negative values use [Euler's reflection formula](https://en.wikipedia.org/wiki/Gamma_function#Properties) for computation.
// @param {number} n Any real number except for zero and negative integers.
// @returns {number} The gamma of the input value.
// @example
// gamma(11.5); // 11899423.084037038
// gamma(-11.5); // 2.29575810481609e-8
// gamma(5); // 24

simple-statistics.gamma(n)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.gamma', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```