let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.quantile', function(done) {
        // Known dataset (sorted)
        const sorted = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
        // Same data but shuffled to verify internal sorting / selection
        const unsorted = [15, 3, 20, 6, 9, 8, 13, 7, 16, 8, 10];

        // Single quantile: median (0.5) should be 9
        const median = simple_statistics.quantile(sorted, 0.5);
        assert.strictEqual(median, 9, 'median should be 9');

        // Array of quantiles: 0 (min), 0.5 (median), 1 (max)
        const quantiles = simple_statistics.quantile(unsorted, [0, 0.5, 1]);
        assert.deepStrictEqual(quantiles, [3, 9, 20], 'quantiles for [0,0.5,1] should be [3,9,20]');

        done();
    });
});