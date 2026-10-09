let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleRankCorrelation', function(done) {
        // Perfect positive correlation
        const xPos = [1, 2, 3, 4, 5];
        const yPos = [10, 20, 30, 40, 50];
        const rPos = simple_statistics.sampleRankCorrelation(xPos, yPos);
        assert.strictEqual(rPos, 1);

        // Perfect negative correlation
        const xNeg = [1, 2, 3, 4, 5];
        const yNeg = [50, 40, 30, 20, 10];
        const rNeg = simple_statistics.sampleRankCorrelation(xNeg, yNeg);
        assert.strictEqual(rNeg, -1);

        // Non‑perfect correlation (known value)
        const x = [1, 2, 3, 4, 5];
        const y = [2, 1, 4, 3, 5];
        // Expected Spearman correlation computed via Pearson on the rank arrays
        const expected = simple_statistics.sampleCorrelation(
            [0, 1, 2, 3, 4],   // ranks of x
            [1, 0, 3, 2, 4]    // ranks of y
        );
        const r = simple_statistics.sampleRankCorrelation(x, y);
        assert.ok(Math.abs(r - expected) < 1e-12);

        done();
    });
});