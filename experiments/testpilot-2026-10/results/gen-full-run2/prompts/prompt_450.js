Your task is to write a test for the following function
```
// Our default sum is the [Kahan-Babuska algorithm](https://pdfs.semanticscholar.org/1760/7d467cda1d0277ad272deb2113533131dc09.pdf).
// This method is an improvement over the classical
// [Kahan summation algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm).
// It aims at computing the sum of a list of numbers while correcting for
// floating-point errors. Traditionally, sums are calculated as many
// successive additions, each one with its own floating-point roundoff. These
// losses in precision add up as the number of numbers increases. This alternative
// algorithm is more accurate than the simple way of calculating sums by simple
// addition.
// This runs in `O(n)`, linear time, with respect to the length of the array.
// @param {Array<number>} x input
// @return {number} sum of all input numbers
// @example
// sum([1, 2, 3]); // => 6

simple-statistics.sum(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sum', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```