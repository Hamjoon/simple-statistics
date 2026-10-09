let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.minSorted', function(done) {
        // Basic sorted array
        assert.strictEqual(simple_statistics.minSorted([1, 2, 3, 4, 5]), 1);
        // Sorted array with negative numbers
        assert.strictEqual(simple_statistics.minSorted([-10, -5, 0, 5]), -10);
        // Sorted array with duplicate values
        assert.strictEqual(simple_statistics.minSorted([2, 2, 2]), 2);
        // Empty array should return undefined
        assert.strictEqual(simple_statistics.minSorted([]), undefined);
        done();
    });
});