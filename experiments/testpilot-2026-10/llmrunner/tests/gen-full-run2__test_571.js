let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    // Helper to convert the rank‑sum returned by simple-statistics
    // into the Mann‑Whitney U statistic used in the original tests.
    function mannWhitneyU(x, y) {
        const nX = x.length;
        // simple_statistics.wilcoxonRankSum returns the sum of the ranks of the first sample (x)
        const sumRanksX = simple_statistics.wilcoxonRankSum(x, y);
        // U = sumRanksX - nX*(nX+1)/2
        return sumRanksX - (nX * (nX + 1)) / 2;
    }

    it('test simple-statistics.wilcoxonRankSum', function (done) {
        // All values in X are lower than Y → U = 0
        const u1 = mannWhitneyU([1, 2, 3], [4, 5, 6]);
        assert.strictEqual(u1, 0);

        // All values in X are higher than Y → U = nX * nY = 3 * 3 = 9
        const u2 = mannWhitneyU([4, 5, 6], [1, 2, 3]);
        assert.strictEqual(u2, 9);

        // Mixed ordering: X = [1,3,5], Y = [2,4,6]
        // Ranks: 1→1, 2→2, 3→3, 4→4, 5→5, 6→6
        // Sum of ranks for X = 1 + 3 + 5 = 9
        // U = sumRanksX - nX*(nX+1)/2 = 9 - 3*4/2 = 3
        const u3 = mannWhitneyU([1, 3, 5], [2, 4, 6]);
        assert.strictEqual(u3, 3);

        done();
    });
});