let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.min', function(done) {
        // Basic functionality
        assert.strictEqual(simple_statistics.min([5, 2, 9, -1, 3]), -1);
        // Single-element array
        assert.strictEqual(simple_statistics.min([10]), 10);
        // Empty array should return undefined
        assert.strictEqual(simple_statistics.min([]), undefined);
        done();
    });
});