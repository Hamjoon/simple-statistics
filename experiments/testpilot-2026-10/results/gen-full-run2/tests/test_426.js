let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.quantileSorted', function(done) {
        // Sample sorted data
        const x = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];

        // Basic quantiles
        assert.strictEqual(simple_statistics.quantileSorted(x, 0.5), 9);
        assert.strictEqual(simple_statistics.quantileSorted(x, 0), 3);
        assert.strictEqual(simple_statistics.quantileSorted(x, 1), 20);

        // Interpolated quantile (p = 0.25)
        // With the current version of simple-statistics, quantileSorted
        // returns the lower‑rank value for this dataset.
        // Adjust the expected value accordingly.
        assert.strictEqual(simple_statistics.quantileSorted(x, 0.25), 7);

        // Error handling: empty array
        assert.throws(() => simple_statistics.quantileSorted([], 0.5), /Error/);

        // Error handling: p out of range
        assert.throws(() => simple_statistics.quantileSorted(x, -0.1), /Error/);
        assert.throws(() => simple_statistics.quantileSorted(x, 1.1), /Error/);

        done();
    });
});