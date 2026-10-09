Your task is to write a test for the following function
```
// The [rank correlation](https://en.wikipedia.org/wiki/Rank_correlation) is
// a measure of the strength of monotonic relationship between two arrays
// @param {Array<number>} x first input
// @param {Array<number>} y second input
// @returns {number} sample rank correlation

simple-statistics.sampleRankCorrelation(x, y)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleRankCorrelation', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```