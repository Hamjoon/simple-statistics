let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.modeFast', function(done) {
        // Basic numeric case
        assert.strictEqual(simple_statistics.modeFast([1, 2, 2, 3]), 2);
        // Multiple occurrences with negative numbers
        assert.strictEqual(simple_statistics.modeFast([-1, -1, 0, 1, 2]), -1);
        // String values
        assert.strictEqual(simple_statistics.modeFast(['a', 'b', 'a', 'c']), 'a');
        // Tie-breaking: first encountered mode should be returned
        // In this array both 5 and 7 appear twice, but 5 appears first.
        assert.strictEqual(simple_statistics.modeFast([5, 7, 5, 7, 9]), 5);
        done();
    });
});