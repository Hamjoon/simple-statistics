let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.minSorted', function(done) {
        // Sorted array – should return the first element
        let sorted = [5, 10, 15];
        assert.strictEqual(simple_statistics.minSorted(sorted), 5);

        // Single‑element array – should return that element
        assert.strictEqual(simple_statistics.minSorted([42]), 42);

        // Empty array – should return undefined (no element at index 0)
        assert.strictEqual(simple_statistics.minSorted([]), undefined);

        done();
    });
});