let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.extentSorted', function(done) {
        // basic example from the documentation
        const input = [-100, -10, 1, 2, 5];
        const result = simple_statistics.extentSorted(input);
        assert.deepStrictEqual(result, [-100, 5]);

        // single‑element array should return the element twice
        assert.deepStrictEqual(simple_statistics.extentSorted([42]), [42, 42]);

        // already sorted array with negative numbers
        assert.deepStrictEqual(simple_statistics.extentSorted([-5, -3, -1]), [-5, -1]);

        done();
    });
});