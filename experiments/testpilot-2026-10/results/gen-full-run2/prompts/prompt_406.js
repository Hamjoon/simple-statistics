Your task is to write a test for the following function
```
// Sampling with replacement is a type of sampling that allows the same
// item to be picked out of a population more than once.
// @param {Array<*>} x an array of any kind of value
// @param {number} n count of how many elements to take
// @param {Function} [randomSource=Math.random] an optional entropy source that
// returns numbers between 0 inclusive and 1 exclusive: the range [0, 1)
// @return {Array} n sampled items from the population
// @example
// var values = [1, 2, 3, 4];
// sampleWithReplacement(values, 2); // returns 2 random values, like [2, 4];

simple-statistics.sampleWithReplacement(x, n, randomSource)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleWithReplacement', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```