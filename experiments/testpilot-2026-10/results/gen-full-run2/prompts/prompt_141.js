Your task is to write a test for the following function
```
// This computes the minimum & maximum number in an array.
// This runs in `O(n)`, linear time, with respect to the length of the array.
// @param {Array<number>} x sample of one or more data points
// @returns {Array<number>} minimum & maximum value
// @throws {Error} if the length of x is less than one
// @example
// extent([1, 2, 3, 4]);
// // => [1, 4]

simple-statistics.extent(x)
```

This function is defined as follows:
```
function extent(x) {
    if (x.length === 0) {
        throw new Error("extent requires at least one data point");
    }

    var min = x[0];
    var max = x[0];
    for (var i = 1; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }
        if (x[i] < min) {
            min = x[i];
        }
    }
    return [min, max];
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.extent', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```