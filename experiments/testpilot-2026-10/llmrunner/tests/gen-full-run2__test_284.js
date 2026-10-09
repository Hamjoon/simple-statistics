let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.max', function(done) {
        // Normal case
        assert.strictEqual(simple_statistics.max([1, 2, 3, 4]), 4);
        // Handles negative numbers and mixed values
        assert.strictEqual(simple_statistics.max([-10, -5, 0, 5]), 5);
        // Throws an error for empty array
        assert.throws(() => simple_statistics.max([]), /Error/);
        done();
    });
});