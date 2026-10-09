Your task is to write a test for the following function
```
// [Sample covariance](https://en.wikipedia.org/wiki/Sample_mean_and_covariance) of two datasets:
// how much do the two datasets move together?
// x and y are two datasets, represented as arrays of numbers.
// @param {Array<number>} x a sample of two or more data points
// @param {Array<number>} y a sample of two or more data points
// @throws {Error} if x and y do not have equal lengths
// @throws {Error} if x or y have length of one or less
// @returns {number} sample covariance
// @example
// sampleCovariance([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]); // => -3.5

simple-statistics.sampleCovariance(x, y)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCovariance', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```