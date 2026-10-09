let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.subtractFromMean', function(done) {
        // Example from the documentation
        const result = simple_statistics.subtractFromMean(20.5, 6, 53);
        assert.strictEqual(result, 14);

        // Additional sanity check
        const mean = 5;
        const n = 4;
        const value = 7;
        const expected = (mean * n - value) / (n - 1); // should be 13/3 ≈ 4.333...
        const result2 = simple_statistics.subtractFromMean(mean, n, value);
        assert.ok(Math.abs(result2 - expected) < 1e-12);

        done();
    });
});