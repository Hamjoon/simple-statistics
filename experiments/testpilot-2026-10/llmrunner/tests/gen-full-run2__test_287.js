let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.maxSorted', function(done) {
        // basic sorted array
        assert.strictEqual(simple_statistics.maxSorted([-100, -10, 1, 2, 5]), 5);
        // single element array
        assert.strictEqual(simple_statistics.maxSorted([42]), 42);
        // array with duplicate maximum values
        assert.strictEqual(simple_statistics.maxSorted([3, 3, 3]), 3);
        // all negative numbers
        assert.strictEqual(simple_statistics.maxSorted([-9, -8, -7, -6]), -6);
        // already sorted with zeros
        assert.strictEqual(simple_statistics.maxSorted([0, 0, 0, 0]), 0);
        done();
    });
});