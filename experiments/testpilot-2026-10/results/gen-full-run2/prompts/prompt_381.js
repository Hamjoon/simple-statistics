Your task is to write a test for the following function
```
simple-statistics.sampleRankCorrelation(x, y)
```

This function is defined as follows:
```
function sampleRankCorrelation(x, y) {
    var xIndexes = x
        .map(function (value, index) { return [value, index]; })
        .sort(function (a, b) { return a[0] - b[0]; })
        .map(function (pair) { return pair[1]; });
    var yIndexes = y
        .map(function (value, index) { return [value, index]; })
        .sort(function (a, b) { return a[0] - b[0]; })
        .map(function (pair) { return pair[1]; });

    // At this step, we have an array of indexes
    // that map from sorted numbers to their original indexes. We reverse
    // that so that it is an array of the sorted destination index.
    var xRanks = Array(xIndexes.length);
    var yRanks = Array(xIndexes.length);
    for (var i = 0; i < xIndexes.length; i++) {
        xRanks[xIndexes[i]] = i;
        yRanks[yIndexes[i]] = i;
    }

    return sampleCorrelation(xRanks, yRanks);
}
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