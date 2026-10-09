Your task is to write a test for the following function
```
// The [Harmonic Mean](https://en.wikipedia.org/wiki/Harmonic_mean) is
// a mean function typically used to find the average of rates.
// This mean is calculated by taking the reciprocal of the arithmetic mean
// of the reciprocals of the input numbers.
// This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
// a method of finding a typical or central value of a set of numbers.
// This runs in `O(n)`, linear time, with respect to the length of the array.
// @param {Array<number>} x sample of one or more data points
// @returns {number} harmonic mean
// @throws {Error} if x is empty
// @throws {Error} if x contains a negative number
// @example
// harmonicMean([2, 3]).toFixed(2) // => '2.40'

simple-statistics.harmonicMean(x)
```

This function is defined as follows:
```
function harmonicMean(x) {
    if (x.length === 0) {
        throw new Error("harmonicMean requires at least one data point");
    }

    var reciprocalSum = 0;

    for (var i = 0; i < x.length; i++) {
        // the harmonic mean is only valid for positive numbers
        if (x[i] <= 0) {
            throw new Error(
                "harmonicMean requires only positive numbers as input"
            );
        }

        reciprocalSum += 1 / x[i];
    }

    // divide n by the reciprocal sum
    return x.length / reciprocalSum;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.harmonicMean', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```