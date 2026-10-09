Your task is to write a test for the following function
```
// The extent is the lowest & highest number in the array. With a sorted array,
// the first element in the array is always the lowest while the last element is always the largest, so this calculation
// can be done in one step, or constant time.
// @param {Array<number>} x input
// @returns {Array<number>} minimum & maximum value
// @example
// extentSorted([-100, -10, 1, 2, 5]); // => [-100, 5]

simple-statistics.extentSorted(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.extentSorted', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```