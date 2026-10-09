let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    // Helper for floating‑point comparison
    const EPS = 1e-12;               // tolerance for “exact” values
    const NEAR_ZERO_EPS = 0.2;        // tolerance for “near zero” case

    it('test simple-statistics.sampleCorrelation', function (done) {
        // Perfect positive correlation → 1
        const xPos = [1, 2, 3, 4, 5];
        const yPos = [2, 4, 6, 8, 10];
        const corrPos = simple_statistics.sampleCorrelation(xPos, yPos);
        // Use a tolerance instead of strict equality to avoid floating‑point glitches
        assert.ok(Math.abs(corrPos - 1) < EPS,
            `Expected correlation ≈ 1, got ${corrPos}`);

        // Perfect negative correlation → -1
        const xNeg = [1, 2, 3, 4, 5];
        const yNeg = [10, 8, 6, 4, 2];
        const corrNeg = simple_statistics.sampleCorrelation(xNeg, yNeg);
        assert.ok(Math.abs(corrNeg + 1) < EPS,
            `Expected correlation ≈ -1, got ${corrNeg}`);

        // Near‑zero correlation
        const xZero = [1, 2, 3, 4, 5];
        const yZero = [5, 3, 1, 2, 4];
        const corrZero = simple_statistics.sampleCorrelation(xZero, yZero);
        // The exact value is not 0, but it should be close to 0
        assert.ok(Math.abs(corrZero) < NEAR_ZERO_EPS,
            `Expected correlation near 0, got ${corrZero}`);

        done();
    });
});