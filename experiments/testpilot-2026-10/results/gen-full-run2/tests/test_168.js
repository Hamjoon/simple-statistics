let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.gamma', function(done) {
        const gamma = simple_statistics.gamma;

        // Integer inputs (should use factorial)
        assert.strictEqual(gamma(1), 1); // 0! = 1
        assert.strictEqual(gamma(2), 1); // 1! = 1
        assert.strictEqual(gamma(3), 2); // 2! = 2
        assert.strictEqual(gamma(4), 6); // 3! = 6
        assert.strictEqual(gamma(5), 24); // 4! = 24

        // Zero or negative integer inputs (should be NaN)
        assert.ok(Number.isNaN(gamma(0)));
        assert.ok(Number.isNaN(gamma(-1)));
        assert.ok(Number.isNaN(gamma(-5)));

        // Non‑integer positive input – compare with known value (γ(2.5) = 0.75·√π)
        const expectedGamma25 = 0.75 * Math.sqrt(Math.PI); // ≈ 1.329340388
        const actualGamma25 = gamma(2.5);
        const tolerance = 1e-6;
        assert.ok(Math.abs(actualGamma25 - expectedGamma25) < tolerance,
            `γ(2.5) ≈ ${expectedGamma25}, got ${actualGamma25}`);

        done();
    });
});