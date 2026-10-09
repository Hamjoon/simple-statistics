Your task is to write a test for the following function
```
// The Root Mean Square (RMS) is
// a mean function used as a measure of the magnitude of a set
// of numbers, regardless of their sign.
// This is the square root of the mean of the squares of the
// input numbers.
// This runs in `O(n)`, linear time, with respect to the length of the array.
// @param {Array<number>} x a sample of one or more data points
// @returns {number} root mean square
// @throws {Error} if x is empty
// @example
// rootMeanSquare([-1, 1, -1, 1]); // => 1

simple-statistics.rms(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.rms', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```