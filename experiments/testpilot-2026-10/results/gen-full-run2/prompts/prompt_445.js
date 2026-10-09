Your task is to write a test for the following function
```
// When removing a value from a list, one does not have to necessary
// recompute the mean of the list in linear time. They can instead use
// this function to compute the new mean by providing the current mean,
// the number of elements in the list that produced it and the value to remove.
// @since 3.0.0
// @param {number} mean current mean
// @param {number} n number of items in the list
// @param {number} value the value to remove
// @returns {number} the new mean
// @example
// subtractFromMean(20.5, 6, 53); // => 14

simple-statistics.subtractFromMean(mean, n, value)
```

This function is defined as follows:
```
function subtractFromMean(mean, n, value) {
    return (mean * n - value) / (n - 1);
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.subtractFromMean', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```