Your task is to write a test for the following function
```
simple-statistics.wilcoxonRankSum(sampleX, sampleY)
```

This function is defined as follows:
```
function wilcoxonRankSum(sampleX, sampleY) {
    if (!sampleX.length || !sampleY.length) {
        throw new Error("Neither sample can be empty");
    }

    var pooledSamples = sampleX
        .map(function (x) { return ({ label: "x", value: x }); })
        .concat(sampleY.map(function (y) { return ({ label: "y", value: y }); }))
        .sort(function (a, b) { return a.value - b.value; });

    for (var rank = 0; rank < pooledSamples.length; rank++) {
        pooledSamples[rank].rank = rank;
    }

    var tiedRanks = [pooledSamples[0].rank];
    for (var i = 1; i < pooledSamples.length; i++) {
        if (pooledSamples[i].value === pooledSamples[i - 1].value) {
            tiedRanks.push(pooledSamples[i].rank);
            if (i === pooledSamples.length - 1) {
                replaceRanksInPlace(pooledSamples, tiedRanks);
            }
        } else if (tiedRanks.length > 1) {
            replaceRanksInPlace(pooledSamples, tiedRanks);
        } else {
            tiedRanks = [pooledSamples[i].rank];
        }
    }

    function replaceRanksInPlace(pooledSamples, tiedRanks) {
        var average = (tiedRanks[0] + tiedRanks[tiedRanks.length - 1]) / 2;
        for (var i = 0; i < tiedRanks.length; i++) {
            pooledSamples[tiedRanks[i]].rank = average;
        }
    }

    var rankSum = 0;

    for (var i$1 = 0; i$1 < pooledSamples.length; i$1++) {
        var sample = pooledSamples[i$1];
        if (sample.label === "x") {
            rankSum += sample.rank + 1;
        }
    }

    return rankSum;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.wilcoxonRankSum', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```