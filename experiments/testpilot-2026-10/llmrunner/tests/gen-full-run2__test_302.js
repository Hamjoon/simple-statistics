let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.min', function(done) {
        // Normal case with multiple values
        assert.strictEqual(simple_statistics.min([1, 5, -10, 100, 2]), -10);
        // Edge case with a single value
        assert.strictEqual(simple_statistics.min([42]), 42);
        // Error case with an empty array
        assert.throws(() => simple_statistics.min([]), /min requires at least one data point/);
        done();
    });
});