let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.relativeError', function(done) {
        // Basic positive numbers
        let err1 = simple_statistics.relativeError(10, 8);
        assert.ok(Math.abs(err1 - 0.25) < 1e-12, 'relative error of 10 vs 8 should be 0.25');

        // Expected value is zero, actual non‑zero => Infinity
        let err2 = simple_statistics.relativeError(5, 0);
        assert.strictEqual(err2, Infinity, 'relative error with expected 0 and actual non‑zero should be Infinity');

        // Both actual and expected are zero => 0 (as per simple-statistics implementation)
        let err3 = simple_statistics.relativeError(0, 0);
        assert.strictEqual(err3, 0, 'relative error of 0 vs 0 should be 0');

        // Negative expected value
        let err4 = simple_statistics.relativeError(-15, -10);
        // | -15 - (-10) | = 5, | -10 | = 10 => 0.5
        assert.ok(Math.abs(err4 - 0.5) < 1e-12, 'relative error with negative numbers should be 0.5');

        done();
    });
});