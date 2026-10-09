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