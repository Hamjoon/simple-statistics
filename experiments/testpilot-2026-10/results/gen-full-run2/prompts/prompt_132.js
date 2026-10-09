Your task is to write a test for the following function
```
// Given an array of x, this will find the extent of the
// x and return an array of breaks that can be used
// to categorize the x into a number of classes. The
// returned array will always be 1 longer than the number of
// classes because it includes the minimum value.
// @param {Array<number>} x an array of number values
// @param {number} nClasses number of desired classes
// @returns {Array<number>} array of class break positions
// @example
// equalIntervalBreaks([1, 2, 3, 4, 5, 6], 4); // => [1, 2.25, 3.5, 4.75, 6]

simple-statistics.equalIntervalBreaks(x, nClasses)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.equalIntervalBreaks', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```