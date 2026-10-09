let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.quantile', function(done) {
        // Unsorted sample data
        const sample = [15, 3, 20, 6, 9, 8, 13, 7, 16, 8, 10];

        // Expected results based on simple-statistics' quantile implementation
        const expectedMedian = 9; // 0.5 quantile
        // simple-statistics uses a different interpolation method, so the expected
        // values are adjusted accordingly.
        const expectedArray = [3, 7, 9, 15, 20]; // quantiles for p = [0,0.25,0.5,0.75,1]

        // Single quantile test
        const median = simple_statistics.quantile(sample, 0.5);
        assert.strictEqual(median, expectedMedian, 'Median should be 9');

        // Multiple quantiles test
        const probs = [0, 0.25, 0.5, 0.75, 1];
        const quantiles = simple_statistics.quantile(sample, probs);
        assert.deepStrictEqual(quantiles, expectedArray, 'Quantiles array does not match expected values');

        done();
    });
});