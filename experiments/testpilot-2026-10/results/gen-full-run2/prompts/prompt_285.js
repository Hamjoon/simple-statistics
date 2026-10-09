Your task is to write a test for the following function
```
// Sort an array of numbers by their numeric value, ensuring that the
// array is not changed in place.
// This is necessary because the default behavior of .sort
// in JavaScript is to sort arrays as string values
// [1, 10, 12, 102, 20].sort()
// // output
// [1, 10, 102, 12, 20]
// @param {Array<number>} x input array
// @return {Array<number>} sorted array
// @private
// @example
// numericSort([3, 2, 1]) // => [1, 2, 3]

simple-statistics.numericSort(x)
```

This function is defined as follows:
```
function numericSort(x) {
    return (
        x
            // ensure the array is not changed in-place
            .slice()
            // comparator function that treats input as numeric
            .sort(function (a, b) {
                return a - b;
            })
    );
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.numericSort', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```