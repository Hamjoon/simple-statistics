Your task is to write a test for the following function
```
// The mean, _also known as average_,
// is the sum of all values over the number of values.
// This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
// a method of finding a typical or central value of a set of numbers.
// The simple mean uses the successive addition method internally
// to calculate it's result. Errors in floating-point addition are
// not accounted for, so if precision is required, the standard {@link mean}
// method should be used instead.
// This runs in `O(n)`, linear time, with respect to the length of the array.
// @param {Array<number>} x sample of one or more data points
// @throws {Error} if the length of x is less than one
// @returns {number} mean
// @example
// mean([0, 10]); // => 5

simple-statistics.averageSimple(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.averageSimple', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```