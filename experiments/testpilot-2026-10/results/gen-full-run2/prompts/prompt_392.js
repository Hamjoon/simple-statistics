Your task is to write a test for the following function
```
// [Skewness](http://en.wikipedia.org/wiki/Skewness) is
// a measure of the extent to which a probability distribution of a
// real-valued random variable "leans" to one side of the mean.
// The skewness value can be positive or negative, or even undefined.
// Implementation is based on the adjusted Fisher-Pearson standardized
// moment coefficient, which is the version found in Excel and several
// statistical packages including Minitab, SAS and SPSS.
// @since 4.1.0
// @param {Array<number>} x a sample of 3 or more data points
// @returns {number} sample skewness
// @throws {Error} if x has length less than 3
// @example
// sampleSkewness([2, 4, 6, 3, 1]); // => 0.590128656384365

simple-statistics.sampleSkewness(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleSkewness', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```