Your task is to write a test for the following function
```
// This is the internal implementation of quantiles: when you know
// that the order is sorted, you don't need to re-sort it, and the computations
// are faster.
// @param {Array<number>} x sample of one or more data points
// @param {number} p desired quantile: a number between 0 to 1, inclusive
// @returns {number} quantile value
// @throws {Error} if p ix outside of the range from 0 to 1
// @throws {Error} if x is empty
// @example
// quantileSorted([3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20], 0.5); // => 9

simple-statistics.quantileSorted(x, p)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileSorted', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```