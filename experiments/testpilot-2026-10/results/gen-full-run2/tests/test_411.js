let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileRank', function(done) {
        // Basic case: value exactly in the middle of the sorted array
        const arr1 = [5, 1, 3, 2, 4];
        const rankMid = simple_statistics.quantileRank(arr1, 3);
        // Expected rank is 0.5 (middle of 5 elements)
        assert.ok(Math.abs(rankMid - 0.5) < 1e-12, `Expected rank 0.5, got ${rankMid}`);

        // Interpolated case: value falls between two elements
        const arr2 = [10, 30, 20, 40];
        const rankInterp = simple_statistics.quantileRank(arr2, 25);
        // Sorted: [10,20,30,40]; 25 is halfway between 20 (index 1) and 30 (index 2)
        // rank = (1 + 0.5) / (4 - 1) = 1.5 / 3 = 0.5
        assert.ok(Math.abs(rankInterp - 0.5) < 1e-12, `Expected interpolated rank 0.5, got ${rankInterp}`);

        // Edge case: value smaller than the minimum
        const rankBelow = simple_statistics.quantileRank(arr1, 0);
        assert.strictEqual(rankBelow, 0, `Expected rank 0 for value below min, got ${rankBelow}`);

        // Edge case: value larger than the maximum
        const rankAbove = simple_statistics.quantileRank(arr1, 10);
        assert.strictEqual(rankAbove, 1, `Expected rank 1 for value above max, got ${rankAbove}`);

        done();
    });
});