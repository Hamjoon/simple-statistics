let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.wilcoxonRankSum', function(done) {
        // Basic non‑tied case (example from the docs)
        const sum1 = simple_statistics.wilcoxonRankSum([1, 4, 8], [9, 12, 15]);
        assert.strictEqual(sum1, 6, 'Rank sum for non‑tied data should be 6');

        // Case with ties – verify that tied ranks are averaged correctly
        // Sample X: [1,2,2]  Sample Y: [2,3,4]
        // Expected rank sum for X = 7 (ties receive average rank 3)
        const sum2 = simple_statistics.wilcoxonRankSum([1, 2, 2], [2, 3, 4]);
        assert.strictEqual(sum2, 7, 'Rank sum with ties should be 7');

        // Edge case: one of the samples is empty – should throw
        assert.throws(
            () => simple_statistics.wilcoxonRankSum([], [1, 2, 3]),
            /Neither sample can be empty/,
            'Calling with an empty sample should throw an error'
        );

        done();
    });
});