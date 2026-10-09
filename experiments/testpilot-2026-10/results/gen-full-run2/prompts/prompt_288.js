Your task is to write a test for the following function
```
simple-statistics.permutationTest(sampleX, sampleY, alternative, k, randomSource)
```

This function is defined as follows:
```
function permutationTest(sampleX, sampleY, alternative, k, randomSource) {
    // Set default arguments
    if (k === undefined) {
        k = 10000;
    }
    if (alternative === undefined) {
        alternative = "two_side";
    }
    if (
        alternative !== "two_side" &&
        alternative !== "greater" &&
        alternative !== "less"
    ) {
        throw new Error(
            "`alternative` must be either 'two_side', 'greater', or 'less'."
        );
    }

    // get means for each sample
    var meanX = mean(sampleX);
    var meanY = mean(sampleY);

    // calculate initial test statistic. This will be our point of comparison with
    // the generated test statistics.
    var testStatistic = meanX - meanY;

    // create test-statistic distribution
    var testStatDsn = new Array(k);

    // combine datsets so we can easily shuffle later
    var allData = sampleX.concat(sampleY);
    var midIndex = Math.floor(allData.length / 2);

    for (var i = 0; i < k; i++) {
        // 1. shuffle data assignments
        shuffleInPlace(allData, randomSource);
        var permLeft = allData.slice(0, midIndex);
        var permRight = allData.slice(midIndex, allData.length);

        // 2.re-calculate test statistic
        var permTestStatistic = mean(permLeft) - mean(permRight);

        // 3. store test statistic to build test statistic distribution
        testStatDsn[i] = permTestStatistic;
    }

    // Calculate p-value depending on alternative
    // For this test, we calculate the percentage of 'extreme' test statistics (subject to our hypothesis)
    // more info on permutation test p-value calculations: https://onlinecourses.science.psu.edu/stat464/node/35
    var numExtremeTStats = 0;
    if (alternative === "two_side") {
        for (var i$1 = 0; i$1 <= k; i$1++) {
            if (Math.abs(testStatDsn[i$1]) >= Math.abs(testStatistic)) {
                numExtremeTStats += 1;
            }
        }
    } else if (alternative === "greater") {
        for (var i$2 = 0; i$2 <= k; i$2++) {
            if (testStatDsn[i$2] >= testStatistic) {
                numExtremeTStats += 1;
            }
        }
    } else {
        // alternative === 'less'
        for (var i$3 = 0; i$3 <= k; i$3++) {
            if (testStatDsn[i$3] <= testStatistic) {
                numExtremeTStats += 1;
            }
        }
    }

    return numExtremeTStats / k;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.permutationTest', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```