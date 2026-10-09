let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.max', function(done) {
        // Normal case
        assert.strictEqual(simple_statistics.max([1, 2, 3, 4]), 4);
        // Handles negative numbers
        assert.strictEqual(simple_statistics.max([-5, -2, -10]), -2);
        // Single-element array
        assert.strictEqual(simple_statistics.max([42]), 42);
        // Throws on empty array
        assert.throws(() => simple_statistics.max([]), /max requires at least one data point/);
        done();
    });
});