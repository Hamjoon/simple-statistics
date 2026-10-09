let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCorrelation', function(done) {
        // Perfect positive correlation → 1
        const xPos = [1, 2, 3, 4, 5];
        const yPos = [2, 4, 6, 8, 10];
        const corrPos = simple_statistics.sampleCorrelation(xPos, yPos);
        assert.strictEqual(corrPos, 1);

        // Perfect negative correlation → -1
        const xNeg = [1, 2, 3, 4, 5];
        const yNeg = [10, 8, 6, 4, 2];
        const corrNeg = simple_statistics.sampleCorrelation(xNeg, yNeg);
        assert.strictEqual(corrNeg, -1);

        // Near‑zero correlation
        const xZero = [1, 2, 3, 4, 5];
        const yZero = [5, 3, 1, 2, 4];
        const corrZero = simple_statistics.sampleCorrelation(xZero, yZero);
        // The exact value is not 0, but it should be close to 0
        assert.ok(Math.abs(corrZero) < 0.2, `Expected correlation near 0, got ${corrZero}`);

        done();
    });
});