let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.tTest', function () {
        const sample = [1, 2, 3, 4, 5, 6];
        const expectedValue = 3.385;

        // Compute the t‑statistic
        const t = simple_statistics.tTest(sample, expectedValue);

        // Expected t‑value (calculated manually)
        // mean = 3.5, stdDev ≈ 1.870828693, SE = stdDev/√6 ≈ 0.764,
        // t = (3.5‑3.385)/SE ≈ 0.1505
        const expected = 0.1505;

        // Use a reasonable tolerance for floating‑point arithmetic
        const tolerance = 1e-3;   // ≈ 0.001
        assert.ok(Math.abs(t - expected) < tolerance);
    });
});