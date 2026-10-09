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
This function is defined as follows:
```
function bisect(func, start, end, maxIterations, errorTolerance) {
    if (typeof func !== "function")
        { throw new TypeError("func must be a function"); }

    for (var i = 0; i < maxIterations; i++) {
        var output = (start + end) / 2;

        if (
            func(output) === 0 ||
            Math.abs((end - start) / 2) < errorTolerance
        ) {
            return output;
        }

        if (sign(func(output)) === sign(func(start))) {
            start = output;
        } else {
            end = output;
        }
    }

    throw new Error("maximum number of iterations exceeded");
}
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