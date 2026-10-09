Your task is to write a test for the following function
```
// 
This function returns the quantile in which one would find the given value in
// the given array. With a sorted array, leveraging binary search, we can find
// this information in logarithmic time.
// @param {Array<number>} x input
// @returns {number} value value
// @example
// quantileRankSorted([1, 2, 3, 4], 3); // => 0.75
// quantileRankSorted([1, 2, 3, 3, 4], 3); // => 0.7
// quantileRankSorted([1, 2, 3, 4], 6); // => 1
// quantileRankSorted([1, 2, 3, 3, 5], 4); // => 0.8

simple-statistics.quantileRankSorted(x, value)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileRankSorted', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```