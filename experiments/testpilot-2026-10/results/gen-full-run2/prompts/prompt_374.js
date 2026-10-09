Your task is to write a test for the following function
```
// [Sample covariance](https://en.wikipedia.org/wiki/Sample_mean_and_covariance) of two datasets:
// how much do the two datasets move together?
// x and y are two datasets, represented as arrays of numbers.
// @param {Array<number>} x a sample of two or more data points
// @param {Array<number>} y a sample of two or more data points
// @throws {Error} if x and y do not have equal lengths
// @throws {Error} if x or y have length of one or less
// @returns {number} sample covariance
// @example
// sampleCovariance([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]); // => -3.5

simple-statistics.sampleCovariance(x, y)
```

This function is defined as follows:
```
function sampleCovariance(x, y) {
    // The two datasets must have the same length which must be more than 1
    if (x.length !== y.length) {
        throw new Error("sampleCovariance requires samples with equal lengths");
    }

    if (x.length < 2) {
        throw new Error(
            "sampleCovariance requires at least two data points in each sample"
        );
    }

    // determine the mean of each dataset so that we can judge each
    // value of the dataset fairly as the difference from the mean. this
    // way, if one dataset is [1, 2, 3] and [2, 3, 4], their covariance
    // does not suffer because of the difference in absolute values
    var xmean = mean(x);
    var ymean = mean(y);
    var sum = 0;

    // for each pair of values, the covariance increases when their
    // difference from the mean is associated - if both are well above
    // or if both are well below
    // the mean, the covariance increases significantly.
    for (var i = 0; i < x.length; i++) {
        sum += (x[i] - xmean) * (y[i] - ymean);
    }

    // this is Bessels' Correction: an adjustment made to sample statistics
    // that allows for the reduced degree of freedom entailed in calculating
    // values from samples rather than complete populations.
    var besselsCorrection = x.length - 1;

    // the covariance is weighted by the length of the datasets.
    return sum / besselsCorrection;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCovariance', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```