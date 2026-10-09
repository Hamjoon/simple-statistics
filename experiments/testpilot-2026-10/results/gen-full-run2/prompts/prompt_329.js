Your task is to write a test for the following function
```
// 
This function returns the quantile in which one would find the given value in
// the given array. It will copy and sort your array before each run, so
// if you know your array is already sorted, you should use `quantileRankSorted`
// instead.
// @param {Array<number>} x input
// @returns {number} value value
// @example
// quantileRank([4, 3, 1, 2], 3); // => 0.75
// quantileRank([4, 3, 2, 3, 1], 3); // => 0.7
// quantileRank([2, 4, 1, 3], 6); // => 1
// quantileRank([5, 3, 1, 2, 3], 4); // => 0.8

simple-statistics.quantileRank(x, value)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileRank', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```