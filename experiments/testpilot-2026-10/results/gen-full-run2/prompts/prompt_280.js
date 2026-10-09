Your task is to write a test for the following function
```
// The [mode](https://en.wikipedia.org/wiki/Mode_%28statistics%29) is the number
// that appears in a list the highest number of times.
// There can be multiple modes in a list: in the event of a tie, this
// algorithm will return the most recently seen mode.
// This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
// a method of finding a typical or central value of a set of numbers.
// This runs in `O(n)` because the input is sorted.
// @param {Array<number>} sorted a sample of one or more data points
// @returns {number} mode
// @throws {Error} if sorted is empty
// @example
// modeSorted([0, 0, 1]); // => 0

simple-statistics.modeSorted(sorted)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.modeSorted', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```