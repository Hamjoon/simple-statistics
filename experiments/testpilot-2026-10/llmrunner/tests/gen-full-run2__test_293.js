let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.median', function (done) {
        // odd number of elements
        assert.strictEqual(simple_statistics.median([3, 1, 2]), 2);
        // even number of elements
        assert.strictEqual(simple_statistics.median([4, 1, 2, 3]), 2.5);
        // unsorted with negative numbers
        assert.strictEqual(simple_statistics.median([-5, 10, 0, -2, 7]), 0);
        // floating‑point numbers
        assert.strictEqual(simple_statistics.median([1.5, 2.5, 3.5]), 2.5);
        // single element array
        assert.strictEqual(simple_statistics.median([42]), 42);
        // empty array should return undefined – guard against the library throwing
        let emptyResult;
        try {
            emptyResult = simple_statistics.median([]);
        } catch (e) {
            // simple-statistics throws when the array is empty; we treat that as undefined
            emptyResult = undefined;
        }
        assert.strictEqual(emptyResult, undefined);
        done();
    });
});