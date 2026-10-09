let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.max', function(done) {
        // typical case
        assert.strictEqual(simple_statistics.max([1, 2, 3, 4, 5]), 5);
        // negative numbers
        assert.strictEqual(simple_statistics.max([-10, -5, -3, -20]), -3);
        // floating point numbers
        assert.strictEqual(simple_statistics.max([0.1, 0.5, 0.3]), 0.5);
        // single element array
        assert.strictEqual(simple_statistics.max([42]), 42);
        // empty array should throw
        assert.throws(() => simple_statistics.max([]), /max requires at least one data point/);
        done();
    });
});