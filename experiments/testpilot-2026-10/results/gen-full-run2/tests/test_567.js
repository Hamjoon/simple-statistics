let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.wilcoxonRankSum', function(done) {
        // Case 1: distinct values, simple ranking
        const rankSum1 = simple_statistics.wilcoxonRankSum([1, 2, 3], [4, 5, 6]);
        // ranks for X are 0,1,2 (0‑based) → (rank+1) = 1,2,3 → sum = 6
        assert.strictEqual(rankSum1, 6);

        // Case 2: ties present
        // Pooled values: 1(x), 2(x), 2(x), 2(y), 3(y)
        // Ranks: 0, (1+2+3)/3 = 2 for each 2, 4 for 3
        // X ranks: 0,2,2 → (0+1)+(2+1)+(2+1) = 1+3+3 = 7
        const rankSum2 = simple_statistics.wilcoxonRankSum([1, 2, 2], [2, 3]);
        assert.strictEqual(rankSum2, 7);

        // Case 3: empty sample should throw
        assert.throws(() => simple_statistics.wilcoxonRankSum([], [1]), /Neither sample can be empty/);
        assert.throws(() => simple_statistics.wilcoxonRankSum([1], []), /Neither sample can be empty/);

        done();
    });
});