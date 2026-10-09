Your task is to write a test for the following function
```
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