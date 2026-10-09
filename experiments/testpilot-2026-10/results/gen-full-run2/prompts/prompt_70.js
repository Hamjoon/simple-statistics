Your task is to write a test for the following function
```
simple-statistics.chiSquaredGoodnessOfFit(data, distributionType, significance)
```

This function is defined as follows:
```
function chiSquaredGoodnessOfFit(data, distributionType, significance) {
    // Estimate from the sample data, a weighted mean.
    var inputMean = mean(data);
    // Calculated value of the χ2 statistic.
    var chiSquared = 0;
    // Number of hypothesized distribution parameters estimated, expected to be supplied in the distribution test.
    // Lose one degree of freedom for estimating `lambda` from the sample data.
    var c = 1;
    // The hypothesized distribution.
    // Generate the hypothesized distribution.
    var hypothesizedDistribution = distributionType(inputMean);
    var observedFrequencies = [];
    var expectedFrequencies = [];

    // Create an array holding a histogram from the sample data, of
    // the form `{ value: numberOfOcurrences }`
    for (var i = 0; i < data.length; i++) {
        if (observedFrequencies[data[i]] === undefined) {
            observedFrequencies[data[i]] = 0;
        }
        observedFrequencies[data[i]]++;
    }

    // The histogram we created might be sparse - there might be gaps
    // between values. So we iterate through the histogram, making
    // sure that instead of undefined, gaps have 0 values.
    for (var i$1 = 0; i$1 < observedFrequencies.length; i$1++) {
        if (observedFrequencies[i$1] === undefined) {
            observedFrequencies[i$1] = 0;
        }
    }

    // Create an array holding a histogram of expected data given the
    // sample size and hypothesized distribution.
    for (var k in hypothesizedDistribution) {
        if (k in observedFrequencies) {
            expectedFrequencies[+k] = hypothesizedDistribution[k] * data.length;
        }
    }

    // Working backward through the expected frequencies, collapse classes
    // if less than three observations are expected for a class.
    // This transformation is applied to the observed frequencies as well.
    for (var k$1 = expectedFrequencies.length - 1; k$1 >= 0; k$1--) {
        if (expectedFrequencies[k$1] < 3) {
            expectedFrequencies[k$1 - 1] += expectedFrequencies[k$1];
            expectedFrequencies.pop();

            observedFrequencies[k$1 - 1] += observedFrequencies[k$1];
            observedFrequencies.pop();
        }
    }

    // Iterate through the squared differences between observed & expected
    // frequencies, accumulating the `chiSquared` statistic.
    for (var k$2 = 0; k$2 < observedFrequencies.length; k$2++) {
        chiSquared +=
            Math.pow(observedFrequencies[k$2] - expectedFrequencies[k$2], 2) /
            expectedFrequencies[k$2];
    }

    // Calculate degrees of freedom for this test and look it up in the
    // `chiSquaredDistributionTable` in order to
    // accept or reject the goodness-of-fit of the hypothesized distribution.
    // Degrees of freedom, calculated as (number of class intervals -
    // number of hypothesized distribution parameters estimated - 1)
    var degreesOfFreedom = observedFrequencies.length - c - 1;
    return (
        chiSquaredDistributionTable[degreesOfFreedom][significance] < chiSquared
    );
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.chiSquaredGoodnessOfFit', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```