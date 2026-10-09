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

This function is defined as follows:
```
function cumulativeStdNormalProbability(z) {
    // Calculate the position of this value.
    var absZ = Math.abs(z);
    // Each row begins with a different
    // significant digit: 0.5, 0.6, 0.7, and so on. Each value in the table
    // corresponds to a range of 0.01 in the input values, so the value is
    // multiplied by 100.
    var index = Math.min(
        Math.round(absZ * 100),
        standardNormalTable.length - 1
    );

    // The index we calculate must be in the table as a positive value,
    // but we still pay attention to whether the input is positive
    // or negative, and flip the output value as a last step.
    if (z >= 0) {
        return standardNormalTable[index];
    } else {
        // due to floating-point arithmetic, values in the table with
        // 4 significant figures can nevertheless end up as repeating
        // fractions when they're computed here.
        return +(1 - standardNormalTable[index]).toFixed(4);
    }
}
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