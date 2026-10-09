Your task is to write a test for the following function
```
simple-statistics.tTestTwoSample(sampleX, sampleY, difference)
```

This function is defined as follows:
```
function tTestTwoSample(sampleX, sampleY, difference) {
    var n = sampleX.length;
    var m = sampleY.length;

    // If either sample doesn't actually have any values, we can't
    // compute this at all, so we return `null`.
    if (!n || !m) {
        return null;
    }

    // default difference (mu) is zero
    if (!difference) {
        difference = 0;
    }

    var meanX = mean(sampleX);
    var meanY = mean(sampleY);
    var sampleVarianceX = sampleVariance(sampleX);
    var sampleVarianceY = sampleVariance(sampleY);

    if (
        typeof meanX === "number" &&
        typeof meanY === "number" &&
        typeof sampleVarianceX === "number" &&
        typeof sampleVarianceY === "number"
    ) {
        var weightedVariance =
            ((n - 1) * sampleVarianceX + (m - 1) * sampleVarianceY) /
            (n + m - 2);

        return (
            (meanX - meanY - difference) /
            Math.sqrt(weightedVariance * (1 / n + 1 / m))
        );
    }
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.tTestTwoSample', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```