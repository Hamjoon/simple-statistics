let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.erf', function(done) {
        const erf = simple_statistics.erf;
        const eps = 1e-7;

        // Basic known values
        // Use a tolerance for erf(0) because some implementations return a very small
        // floating‑point error instead of exactly 0.
        assert.ok(Math.abs(erf(0)) < eps, `erf(0) should be ≈0, got ${erf(0)}`);

        // Values from reference implementation / tables
        assert.ok(Math.abs(erf(0.5) - 0.5204998778130465) < eps,
            `erf(0.5) ≈ 0.5204998778, got ${erf(0.5)}`);
        assert.ok(Math.abs(erf(1) - 0.8427007929497149) < eps,
            `erf(1) ≈ 0.8427007929, got ${erf(1)}`);
        assert.ok(Math.abs(erf(-1) + 0.8427007929497149) < eps,
            `erf(-1) ≈ -0.8427007929, got ${erf(-1)}`);

        // Extreme values approach limits
        assert.ok(erf(3) > 0.999, `erf(3) should be > 0.999, got ${erf(3)}`);
        assert.ok(erf(-3) < -0.999, `erf(-3) should be < -0.999, got ${erf(-3)}`);

        done();
    });
});