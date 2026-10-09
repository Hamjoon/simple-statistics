let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.max', function(done) {
        // basic integer array
        assert.strictEqual(simple_statistics.max([1, 2, 3]), 3);
        // array with negative numbers
        assert.strictEqual(simple_statistics.max([-5, -2, -10]), -2);
        // single-element array
        assert.strictEqual(simple_statistics.max([0]), 0);
        // array with floating point numbers
        assert.strictEqual(simple_statistics.max([1.5, 2.3, 2.1]), 2.3);
        // unsorted array
        assert.strictEqual(simple_statistics.max([5, 1, 9, 3]), 9);
        done();
    });
});