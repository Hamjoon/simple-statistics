let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.gamma', function(done) {
        const gamma = simple_statistics.gamma;

        // Integer positive: gamma(5) = 4! = 24
        assert.strictEqual(gamma(5), 24);

        // Non‑integer positive: compare with known value (within tolerance)
        const val1 = gamma(11.5);
        const expected1 = 11899423.084037038;
        assert.ok(Math.abs(val1 - expected1) / expected1 < 1e-12, `gamma(11.5) ≈ ${expected1}, got ${val1}`);

        // Negative non‑integer: compare with known value (within tolerance)
        const val2 = gamma(-11.5);
        const expected2 = 2.29575810481609e-8;
        assert.ok(Math.abs(val2 - expected2) / expected2 < 1e-12, `gamma(-11.5) ≈ ${expected2}, got ${val2}`);

        // Zero (undefined) should return NaN
        assert.ok(isNaN(gamma(0)), 'gamma(0) should be NaN');

        // Negative integer (undefined) should return NaN
        assert.ok(isNaN(gamma(-3)), 'gamma(-3) should be NaN');

        done();
    });
});