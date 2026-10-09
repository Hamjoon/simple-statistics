let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.wilcoxonRankSum', function(done) {
        // Basic example from the documentation
        assert.strictEqual(
            simple_statistics.wilcoxonRankSum([1, 4, 8], [9, 12, 15]),
            6
        );

        // Simple non‑overlapping samples
        assert.strictEqual(
            simple_statistics.wilcoxonRankSum([2, 3], [1, 4]),
            5
        );

        // Samples containing tied values (average ranks should be used)
        assert.strictEqual(
            simple_statistics.wilcoxonRankSum([1, 2, 2], [2, 3]),
            7
        );

        done();
    });
});