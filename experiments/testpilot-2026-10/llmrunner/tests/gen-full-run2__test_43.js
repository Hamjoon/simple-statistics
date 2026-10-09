let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.approxEqual', function(done) {
        // Exact equality should always be true regardless of tolerance
        assert.strictEqual(simple_statistics.approxEqual(5, 5, 0.01), true);

        // Values within the relative tolerance should be true
        // 1% difference, tolerance 2%
        assert.strictEqual(simple_statistics.approxEqual(100, 101, 0.02), true);

        // Values outside the relative tolerance should be false
        // 3% difference, tolerance 2%
        assert.strictEqual(simple_statistics.approxEqual(100, 103, 0.02), false);

        // Zero compared to zero should be true
        assert.strictEqual(simple_statistics.approxEqual(0, 0, 0.01), true);

        // Zero compared to a non‑zero value should be false (relative diff is infinite)
        assert.strictEqual(simple_statistics.approxEqual(0, 0.0001, 0.01), false);

        // Negative numbers: relative difference is based on magnitude
        // 1% difference, tolerance 2%
        assert.strictEqual(simple_statistics.approxEqual(-10, -10.1, 0.02), true);

        // Tolerance of zero only allows exact matches
        assert.strictEqual(simple_statistics.approxEqual(5, 5, 0), true);
        assert.strictEqual(simple_statistics.approxEqual(5, 5.000001, 0), false);

        done();
    });
});