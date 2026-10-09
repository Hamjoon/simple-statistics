Your task is to write a test for the following function
```
// The min is the lowest number in the array.
// This runs in `O(n)`, linear time, with respect to the length of the array.
// @param {Array<number>} x sample of one or more data points
// @throws {Error} if the length of x is less than one
// @returns {number} minimum value
// @example
// min([1, 5, -10, 100, 2]); // => -10

simple-statistics.min(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.min', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```