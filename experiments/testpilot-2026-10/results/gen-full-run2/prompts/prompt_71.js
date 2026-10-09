Your task is to write a test for the following function
```
// The [χ2 (Chi-Squared) Goodness-of-Fit Test](http://en.wikipedia.org/wiki/Goodness_of_fit#Pearson.27s_chi-squared_test)
// uses a measure of goodness of fit which is the sum of differences between observed and expected outcome frequencies
// (that is, counts of observations), each squared and divided by the number of observations expected given the
// hypothesized distribution. The resulting χ2 statistic, `chiSquared`, can be compared to the chi-squared distribution
// to determine the goodness of fit. In order to determine the degrees of freedom of the chi-squared distribution, one
// takes the total number of observed frequencies and subtracts the number of estimated parameters. The test statistic
// follows, approximately, a chi-square distribution with (k − c) degrees of freedom where `k` is the number of non-empty
// cells and `c` is the number of estimated parameters for the distribution.
// @param {Array<number>} data
// @param {Function} distributionType a function that returns a point in a distribution:
// for instance, binomial, bernoulli, or poisson
// @param {number} significance
// @returns {number} chi squared goodness of fit
// @example
// // Data from Poisson goodness-of-fit example 10-19 in William W. Hines & Douglas C. Montgomery,
// // "Probability and Statistics in Engineering and Management Science", Wiley (1980).
// var data1019 = [
// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
// 2, 2, 2, 2, 2, 2, 2, 2, 2,
// 3, 3, 3, 3
// ];
// ss.chiSquaredGoodnessOfFit(data1019, ss.poissonDistribution, 0.05); //= false

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