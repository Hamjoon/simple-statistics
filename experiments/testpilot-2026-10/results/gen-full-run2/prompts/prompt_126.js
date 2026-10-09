Your task is to write a test for the following function
```
// **[Cumulative Standard Normal Probability](http://en.wikipedia.org/wiki/Standard_normal_table)**
// Since probability tables cannot be
// printed for every normal distribution, as there are an infinite variety
// of normal distributions, it is common practice to convert a normal to a
// standard normal and then use the standard normal table to find probabilities.
// You can use `.5 + .5 * errorFunction(x / Math.sqrt(2))` to calculate the probability
// instead of looking it up in a table.
// @param {number} z
// @returns {number} cumulative standard normal probability

simple-statistics.cumulativeStdNormalProbability(z)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.cumulativeStdNormalProbability', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```