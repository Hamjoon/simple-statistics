Your task is to write a test for the following function
```
// The [log average](https://en.wikipedia.org/wiki/https://en.wikipedia.org/wiki/Geometric_mean#Relationship_with_logarithms)
// is an equivalent way of computing the geometric mean of an array suitable for large or small products.
// It's found by calculating the average logarithm of the elements and exponentiating.
// @param {Array<number>} x sample of one or more data points
// @returns {number} geometric mean
// @throws {Error} if x is empty
// @throws {Error} if x contains a negative number

simple-statistics.logAverage(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.logAverage', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```