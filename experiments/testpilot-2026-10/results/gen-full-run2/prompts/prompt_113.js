Your task is to write a test for the following function
```
// When combining two lists of values for which one already knows the variances,
// one does not have to necessary recompute the variance of the combined lists
// in linear time. They can instead use this function to compute the combined
// variance by providing the variance, mean & number of values of the first list
// and the variance, mean & number of values of the second list.
// @since 3.0.0
// @param {number} variance1 variance of the first list
// @param {number} mean1 mean of the first list
// @param {number} n1 number of items in the first list
// @param {number} variance2 variance of the second list
// @param {number} mean2 mean of the second list
// @param {number} n2 number of items in the second list
// @returns {number} the combined mean
// @example
// combineVariances(14 / 3, 5, 3, 8 / 3, 4, 3); // => 47 / 12

simple-statistics.combineVariances(variance1, mean1, n1, variance2, mean2, n2)
```

This function is defined as follows:
```
function combineVariances(variance1, mean1, n1, variance2, mean2, n2) {
    var newMean = combineMeans(mean1, n1, mean2, n2);

    return (
        (n1 * (variance1 + Math.pow(mean1 - newMean, 2)) +
            n2 * (variance2 + Math.pow(mean2 - newMean, 2))) /
        (n1 + n2)
    );
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combineVariances', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```