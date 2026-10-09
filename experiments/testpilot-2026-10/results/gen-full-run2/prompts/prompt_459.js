Your task is to write a test for the following function
```
// The simple [sum](https://en.wikipedia.org/wiki/Summation) of an array
// is the result of adding all numbers together, starting from zero.
// This runs in `O(n)`, linear time, with respect to the length of the array.
// @param {Array<number>} x input
// @return {number} sum of all input numbers
// @example
// sumSimple([1, 2, 3]); // => 6

simple-statistics.sumSimple(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sumSimple', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```