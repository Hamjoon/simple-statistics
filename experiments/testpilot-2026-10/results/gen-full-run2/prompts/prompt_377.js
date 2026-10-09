Your task is to write a test for the following function
```
simple-statistics.sampleKurtosis(x)
```

This function is defined as follows:
```
function sampleKurtosis(x) {
    var n = x.length;

    if (n < 4) {
        throw new Error("sampleKurtosis requires at least four data points");
    }

    var meanValue = mean(x);
    var tempValue;
    var secondCentralMoment = 0;
    var fourthCentralMoment = 0;

    for (var i = 0; i < n; i++) {
        tempValue = x[i] - meanValue;
        secondCentralMoment += tempValue * tempValue;
        fourthCentralMoment += tempValue * tempValue * tempValue * tempValue;
    }

    return (
        ((n - 1) / ((n - 2) * (n - 3))) *
        ((n * (n + 1) * fourthCentralMoment) /
            (secondCentralMoment * secondCentralMoment) -
            3 * (n - 1))
    );
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleKurtosis', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```