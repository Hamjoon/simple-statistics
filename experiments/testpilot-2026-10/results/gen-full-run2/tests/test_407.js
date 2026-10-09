let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.quantile', function (done) {
        // Unsorted data set
        const data = [7, 1, 3, 5];

        // Single quantile tests – simple_statistics.quantile sorts internally,
        // so these continue to work.
        // Median of [1,3,5,7] is (3+5)/2 = 4
        assert.strictEqual(simple_statistics.quantile(data, 0.5), 4);
        // Minimum and maximum
        assert.strictEqual(simple_statistics.quantile(data, 0), 1);
        assert.strictEqual(simple_statistics.quantile(data, 1), 7);

        // -----------------------------------------------------------------
        // Array of quantiles test
        // -----------------------------------------------------------------
        // When an *array* of probabilities is supplied, simple-statistics
        // expects the data to already be sorted.  Therefore we sort the
        // dataset first (or use the dedicated `quantileSorted` helper).
        const sorted = data.slice().sort((a, b) => a - b);

        // Now ask for the full set of quantiles.
        const qs = simple_statistics.quantileSorted(sorted, [0, 0.25, 0.5, 0.75, 1]);

        // Expected values using linear interpolation on sorted [1,3,5,7]
        const expected = [1, 2.5, 4, 5.5, 7];

        // Compare each result with a small tolerance
        for (let i = 0; i < expected.length; i++) {
            assert.ok(
                Math.abs(qs[i] - expected[i]) < 1e-12,
                `Quantile ${i} mismatch (got ${qs[i]}, expected ${expected[i]})`
            );
        }

        done();
    });
});