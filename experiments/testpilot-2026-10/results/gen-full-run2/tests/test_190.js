let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.interquartileRange', function(done) {
        // Test with an unsorted array of eight numbers
        const iqr = simple_statistics.interquartileRange([7, 1, 3, 5, 2, 8, 4, 6]);
        assert.strictEqual(iqr, 3.5, 'IQR of [1..8] should be 3.5');

        // Test with a single-element array (IQR should be 0)
        const iqrSingle = simple_statistics.interquartileRange([42]);
        assert.strictEqual(iqrSingle, 0, 'IQR of a single-element array should be 0');

        // Test with an empty array (should return undefined)
        const iqrEmpty = simple_statistics.interquartileRange([]);
        assert.strictEqual(iqrEmpty, undefined, 'IQR of an empty array should be undefined');

        done();
    });
});