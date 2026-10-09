let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.numericSort', function(done) {
        // original array (unsorted)
        const original = [10, 2, 1, 20, 12, -5, 0, 3.5];
        // keep a copy to verify that the function does not mutate the input
        const copy = original.slice();

        // call the function under test
        const sorted = simple_statistics.numericSort(original);

        // expected result – numeric ascending order
        const expected = [-5, 0, 1, 2, 3.5, 10, 12, 20];

        // 1. The returned array should be correctly sorted
        assert.deepStrictEqual(sorted, expected, 'numericSort should return a correctly sorted array');

        // 2. The original array must remain unchanged
        assert.deepStrictEqual(original, copy, 'numericSort must not modify the original array');

        done();
    });
});