Your task is to write a test for the following function
```
// The [product](https://en.wikipedia.org/wiki/Product_(mathematics)) of an array
// is the result of multiplying all numbers together, starting using one as the multiplicative identity.
// This runs in `O(n)`, linear time, with respect to the length of the array.
// @param {Array<number>} x input
// @return {number} product of all input numbers
// @example
// product([1, 2, 3, 4]); // => 24

simple-statistics.product(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.product', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```