Your task is to write a test for the following function
```
// The sum of deviations to the Nth power.
// When n=2 it's the sum of squared deviations.
// When n=3 it's the sum of cubed deviations.
// @param {Array<number>} x
// @param {number} n power
// @returns {number} sum of nth power deviations
// @example
// var input = [1, 2, 3];
// // since the variance of a set is the mean squared
// // deviations, we can calculate that with sumNthPowerDeviations:
// sumNthPowerDeviations(input, 2) / input.length;

simple-statistics.sumNthPowerDeviations(x, n)
```

This function is defined as follows:
```
function sumNthPowerDeviations(x, n) {
    var meanValue = mean(x);
    var sum = 0;
    var tempValue;
    var i;

    // This is an optimization: when n is 2 (we're computing a number squared),
    // multiplying the number by itself is significantly faster than using
    // the Math.pow method.
    if (n === 2) {
        for (i = 0; i < x.length; i++) {
            tempValue = x[i] - meanValue;
            sum += tempValue * tempValue;
        }
    } else {
        for (i = 0; i < x.length; i++) {
            sum += Math.pow(x[i] - meanValue, n);
        }
    }

    return sum;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sumNthPowerDeviations', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```