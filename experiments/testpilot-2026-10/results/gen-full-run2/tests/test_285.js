let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.maxSorted', function(done) {
        // maxSorted should return the last element of a sorted array
        assert.strictEqual(simple_statistics.maxSorted([1, 2, 3, 4, 5]), 5);
        // works with negative numbers and zero
        assert.strictEqual(simple_statistics.maxSorted([-10, -5, 0, 5]), 5);
        // works when all elements are the same
        assert.strictEqual(simple_statistics.maxSorted([7, 7, 7]), 7);
        // returns undefined for an empty array
        assert.strictEqual(simple_statistics.maxSorted([]), undefined);
        done();
    });
});