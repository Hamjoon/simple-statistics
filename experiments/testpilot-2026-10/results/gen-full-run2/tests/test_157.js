let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.extentSorted', function(done) {
        // Sorted array should return [min, max]
        const sorted = [1, 2, 3, 4, 5];
        assert.deepStrictEqual(simple_statistics.extentSorted(sorted), [1, 5]);

        // Single-element array should return [value, value]
        const single = [42];
        assert.deepStrictEqual(simple_statistics.extentSorted(single), [42, 42]);

        // Empty array should return an empty array
        const empty = [];
        assert.deepStrictEqual(simple_statistics.extentSorted(empty), []);

        done();
    });
});