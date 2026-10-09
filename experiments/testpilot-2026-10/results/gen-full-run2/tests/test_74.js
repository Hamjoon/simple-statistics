let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.chiSquaredGoodnessOfFit', function(done) {
        // Data from Poisson goodness-of-fit example 10-19 in
        // William W. Hines & Douglas C. Montgomery,
        // "Probability and Statistics in Engineering and Management Science", Wiley (1980).
        var data1019 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2, 2, 2,
            3, 3, 3, 3
        ];
        // The chi-squared goodness-of-fit test should *not* reject the Poisson
        // distribution for this data at the 0.05 significance level.
        var result = simple_statistics.chiSquaredGoodnessOfF    })
})