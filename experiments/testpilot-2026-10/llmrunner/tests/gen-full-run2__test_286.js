let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.maxSorted', function(done) {
        // Sorted array
        const arr = [1, 2, 3, 4, 5];
        assert.strictEqual(simple_statistics.maxSorted(arr), 5);

        // Sorted array with negative numbers
        const arrNeg = [-10, -5, -1];
        assert.strictEqual(simple_statistics.maxSorted(arrNeg), -1);

        // Single‑element array
        const arrSingle = [42];
        assert.strictEqual(simple_statistics.maxSorted(arrSingle), 42);

        // Empty array should return undefined
        const arrEmpty = [];
        assert.strictEqual(simple_statistics.maxSorted(arrEmpty), undefined);

        done();
    });
});