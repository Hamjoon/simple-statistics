let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.quantileRankSorted', function (done) {
        // Sorted array for testing
        const sorted = [0, 10, 20, 30, 40];

        // Exact match: value = 20 should be at rank 0.6 ((index+1)/n)
        let rank = simple_statistics.quantileRankSorted(sorted, 20);
        assert.strictEqual(rank, 0.6);

        // Interpolated value: 15 lies halfway between 10 and 20
        // Expected rank = (1 + 0.5) / 5 = 0.3
        rank = simple_statistics.quantileRankSorted(sorted, 15);
        assert.ok(Math.abs(rank - 0.3) < 1e-12, `Expected 0.3, got ${rank}`);

        // Value below the minimum should return 0
        rank = simple_statistics.quantileRankSorted(sorted, -5);
        assert.strictEqual(rank, 0);

        // Value above the maximum should return 1
        rank = simple_statistics.quantileRankSorted(sorted, 100);
        assert.strictEqual(rank, 1);

        // Edge case: first element (0) should be rank 0.2 ((0+1)/5)
        rank = simple_statistics.quantileRankSorted(sorted, 0);
        assert.strictEqual(rank, 0.2);

        // Edge case: last element (40) should be rank 1 ((4+1)/5)
        rank = simple_statistics.quantileRankSorted(sorted, 40);
        assert.strictEqual(rank, 1);

        done();
    });
});