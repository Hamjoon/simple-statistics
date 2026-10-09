Your task is to write a test for the following function
```
// Implementation of [Combinations](https://en.wikipedia.org/wiki/Combination) with replacement
// Combinations are unique subsets of a collection - in this case, k x from a collection at a time.
// 'With replacement' means that a given element can be chosen multiple times.
// Unlike permutation, order doesn't matter for combinations.
// @param {Array} x any type of data
// @param {int} k the number of objects in each group (without replacement)
// @returns {Array<Array>} array of permutations
// @example
// combinationsReplacement([1, 2], 2); // => [[1, 1], [1, 2], [2, 2]]

simple-statistics.combinationsReplacement(x, k)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combinationsReplacement', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```