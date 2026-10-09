Your task is to write a test for the following function
```
simple-statistics.tTest(x, expectedValue)
```

This function is defined as follows:
```
function tTest(x, expectedValue) {
    // The mean of the sample
    var sampleMean = mean(x);

    // The standard deviation of the sample
    var sd = standardDeviation(x);

    // Square root the length of the sample
    var rootN = Math.sqrt(x.length);

    // returning the t value
    return (sampleMean - expectedValue) / (sd / rootN);
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.tTest', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```