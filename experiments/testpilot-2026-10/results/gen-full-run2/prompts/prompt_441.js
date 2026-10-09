Your task is to write a test for the following function
```
// The [standard deviation](http://en.wikipedia.org/wiki/Standard_deviation)
// is the square root of the variance. This is also known as the population
// standard deviation. It's useful for measuring the amount
// of variation or dispersion in a set of values.
// Standard deviation is only appropriate for full-population knowledge: for
// samples of a population, {@link sampleStandardDeviation} is
// more appropriate.
// @param {Array<number>} x input
// @returns {number} standard deviation
// @example
// variance([2, 4, 4, 4, 5, 5, 7, 9]); // => 4
// standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]); // => 2

simple-statistics.standardDeviation(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.standardDeviation', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```