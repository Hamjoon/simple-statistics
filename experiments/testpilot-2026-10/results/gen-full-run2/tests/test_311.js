let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.mode', function(done) {
        // Basic case: single mode
        assert.strictEqual(simple_statistics.mode([0, 0, 1]), 0);

        // Tie case: most recently seen mode should win
        // Both 1 and 2 appear twice, but 1 is the most recent occurrence
        assert.strictEqual(simple_statistics.mode([1, 2, 2, 1]), 1);

        // Unsorted input with a clear mode
        assert.strictEqual(simple_statistics.mode([5, 1, 5, 2, 1, 1]), 1);

        done();
    });
});