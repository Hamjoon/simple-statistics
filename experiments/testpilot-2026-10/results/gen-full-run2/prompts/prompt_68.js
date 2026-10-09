Your task is to write a test for the following function
```
// [Bisection method](https://en.wikipedia.org/wiki/Bisection_method) is a root-finding
// method that repeatedly bisects an interval to find the root.
// 
This function returns a numerical approximation to the exact value.
// @param {Function} func input function
// @param {number} start - start of interval
// @param {number} end - end of interval
// @param {number} maxIterations - the maximum number of iterations
// @param {number} errorTolerance - the error tolerance
// @returns {number} estimated root value
// @throws {TypeError} Argument func must be a function
// @example
// bisect(Math.cos,0,4,100,0.003); // => 1.572265625

simple-statistics.bisect(func, start, end, maxIterations, errorTolerance)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.bisect', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```