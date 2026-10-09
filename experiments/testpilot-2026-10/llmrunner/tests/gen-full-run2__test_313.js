let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.mode', function(done) {
        // Basic mode
        assert.strictEqual(simple_statistics.mode([0, 0, 1]), 0);
        // Tie: simple-statistics returns the first encountered mode
        // Both 2 and 3 appear twice, but 2 is encountered first, so it is returned.
        assert.strictEqual(simple_statistics.mode([1, 2, 2, 3, 3]), 2);
        // Single element list
        assert.strictEqual(simple_statistics.mode([5]), 5);
        // Negative numbers and multiple occurrences
        assert.strictEqual(simple_statistics.mode([-1, -1, -2, -2, -2]), -2);
        done();
    });
});