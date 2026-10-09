let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileRankSorted', function(done) {
        // Value less than any element
        assert.strictEqual(simple_statistics.quantileRankSorted([1, 2, 3, 4, 5], 0), 0);
        // Value greater than any element
        assert.strictEqual(simple_statistics.quantileRankSorted([1, 2, 3, 4, 5], 6), 1);
        // Value not present but within range
        assert.strictEqual(simple_statistics.quantileRankSorted([1, 2, 4, 5], 3), 0.5);
        // Value present exactly once (middle element)
        assert.strictEqual(simple_statistics.quantileRankSorted([1, 2, 3, 4, 5], 3), 0.6);
        // Value present exactly once (first element)
        assert.strictEqual(simple_statistics.quantileRankSorted([1, 2, 3, 4, 5], 1), 0.2);
        // Value present multiple times
        // Array: [1,2,2,2,3]; occurrences of 2 are at indices 1,2,3 (0‑based)
        // Expected rank = mean position (2+3+4)/5 = 3/5 = 0.6
        assert.strictEqual(simple_statistics.quantileRankSorted([1, 2, 2, 2, 3], 2), 0.6);
        done();
    });
});