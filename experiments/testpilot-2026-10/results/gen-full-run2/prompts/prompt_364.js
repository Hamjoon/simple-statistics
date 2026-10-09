Your task is to write a test for the following function
```
// Create a [simple random sample](http://en.wikipedia.org/wiki/Simple_random_sample)
// from a given array of `n` elements.
// The sampled values will be in any order, not necessarily the order
// they appear in the input.
// @param {Array<any>} x input array. can contain any type
// @param {number} n count of how many elements to take
// @param {Function} [randomSource=Math.random] an optional entropy source that
// returns numbers between 0 inclusive and 1 exclusive: the range [0, 1)
// @return {Array} subset of n elements in original array
// @example
// var values = [1, 2, 4, 5, 6, 7, 8, 9];
// sample(values, 3); // returns 3 random values, like [2, 5, 8];

simple-statistics.sample(x, n, randomSource)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sample', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```