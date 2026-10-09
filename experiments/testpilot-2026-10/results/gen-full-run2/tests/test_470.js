let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleRankCorrelation', function(done) {
        // Perfect positive correlation should be 1
        let xPos = [1, 2, 3, 4, 5];
        let yPos = [10, 20, 30, 40, 50];
        let rPos = simple_statistics.sampleRankCorrelation(xPos, yPos);
        assert.strictEqual(rPos, 1);

        // Perfect negative correlation should be -1
        let yNeg = [50, 40, 30, 20, 10];
        let rNeg = simple_statistics.sampleRankCorrelation(xPos, yNeg);
        assert.strictEqual(rNeg, -1);

        // A known non‑perfect correlation (Spearman's rho = 0.8)
        // x: 1 2 3 4 5  -> ranks 1 2 3 4 5
        // y: 2 1 4 3 5  -> ranks 2 1 4 3 5
        // Pearson correlation of the ranks = 0.8
        let xMid = [1, 2, 3, 4, 5];
        let yMid = [2, 1, 4, 3, 5];
        let rMid = simple_statistics.sampleRankCorrelation(xMid, yMid);
        assert.ok(Math.abs(rMid - 0.8) < 1e-12);

        done();
    });
});