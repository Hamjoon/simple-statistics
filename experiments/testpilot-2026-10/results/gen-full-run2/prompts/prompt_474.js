Your task is to write a test for the following function
```
// For a sorted input, counting the number of unique values
// is possible in constant time and constant memory. This is
// a simple implementation of the algorithm.
// Values are compared with `===`, so objects and non-primitive objects
// are not handled in any special way.
// @param {Array<*>} x an array of any kind of value
// @returns {number} count of unique values
// @example
// uniqueCountSorted([1, 2, 3]); // => 3
// uniqueCountSorted([1, 1, 1]); // => 1

simple-statistics.uniqueCountSorted(x)
```

This function is defined as follows:
```
function uniqueCountSorted(x) {
    var uniqueValueCount = 0,
        lastSeenValue;
    for (var i = 0; i < x.length; i++) {
        if (i === 0 || x[i] !== lastSeenValue) {
            lastSeenValue = x[i];
            uniqueValueCount++;
        }
    }
    return uniqueValueCount;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.uniqueCountSorted', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```