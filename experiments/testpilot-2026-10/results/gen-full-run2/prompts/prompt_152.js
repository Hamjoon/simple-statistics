Your task is to write a test for the following function
```
// A [Factorial](https://en.wikipedia.org/wiki/Factorial), usually written n!, is the product of all positive
// integers less than or equal to n. Often factorial is implemented
// recursively, but this iterative approach is significantly faster
// and simpler.
// @param {number} n input, must be an integer number 1 or greater
// @returns {number} factorial: n!
// @throws {Error} if n is less than 0 or not an integer
// @example
// factorial(5); // => 120

simple-statistics.factorial(n)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.factorial', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```