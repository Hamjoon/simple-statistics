Your task is to write a test for the following function
```
// The [quantile](https://en.wikipedia.org/wiki/Quantile):
// this is a population quantile, since we assume to know the entire
// dataset in this library. This is an implementation of the
// [Quantiles of a Population](http://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population)
// algorithm from wikipedia.
// Sample is a one-dimensional array of numbers,
// and p is either a decimal number from 0 to 1 or an array of decimal
// numbers from 0 to 1.
// In terms of a k/q quantile, p = k/q - it's just dealing with fractions or dealing
// with decimal values.
// When p is an array, the result of the function is also an array containing the appropriate
// quantiles in input order
// @param {Array<number>} x sample of one or more numbers
// @param {Array<number> | number} p the desired quantile, as a number between 0 and 1
// @returns {number} quantile
// @example
// quantile([3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20], 0.5); // => 9

simple-statistics.quantile(x, p)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantile', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```