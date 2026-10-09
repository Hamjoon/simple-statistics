let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    // tolerance for floating‑point comparisons
    const EPS = 1e-12;

    it('test simple-statistics.sampleRankCorrelation', function (done) {
        // Perfect positive correlation
        const xPos = [10, 20, 30, 40, 50];
        const yPos = [1, 2, 3, 4, 5];
        const corrPos = simple_statistics.sampleRankCorrelation(xPos, yPos);
        assert.ok(Math.abs(corrPos - 1) < EPS,
            `Expected correlation of 1 for perfectly increasing sequences, got ${corrPos}`);

        // Perfect negative correlation
        const xNeg = [1, 2, 3, 4, 5];
        const yNeg = [5, 4, 3, 2, 1];
        const corrNeg = simple_statistics.sampleRankCorrelation(xNeg, yNeg);
        assert.ok(Math.abs(corrNeg + 1) < EPS,
            `Expected correlation of -1 for perfectly decreasing sequences, got ${corrNeg}`);

        // No correlation (random order)
        const xZero = [1, 2, 3, 4, 5];
        const yZero = [2, 5, 1, 4, 3];
        const corrZero = simple_statistics.sampleRankCorrelation(xZero, yZero);
        // For this specific data the exact Spearman correlation is 0
        assert.ok(Math.abs(corrZero) < EPS,
            `Expected correlation of 0 for uncorrelated sequences, got ${corrZero}`);

        done();
    });
});