Your task is to write a test for the following function
```
// When adding a new value to a list, one does not have to necessary
// recompute the mean of the list in linear time. They can instead use
// this function to compute the new mean by providing the current mean,
// the number of elements in the list that produced it and the new
// value to add.
// @since 2.5.0
// @param {number} mean current mean
// @param {number} n number of items in the list
// @param {number} newValue the added value
// @returns {number} the new mean
// @example
// addToMean(14, 5, 53); // => 20.5

simple-statistics.addToMean(mean, n, newValue)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.addToMean', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```