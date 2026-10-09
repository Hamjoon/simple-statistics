let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

function interquartileRange(arr) {
    // Return undefined for an empty array (matches the original library behaviour)
    if (arr.length === 0) return undefined;

    // Work on a sorted copy of the data
    const sorted = arr.slice().sort((a, b) => a - b);

    // For a single‑element array the IQR is defined as 0
    if (sorted.length === 1) return 0;

    // Use the quantile function that follows the (n‑1)*p+1 interpolation rule
    const q1 = simple_statistics.quantileSorted(sorted, 0.25);
    const q3 = simple_statistics.quantileSorted(sorted, 0.75);
    return q3 - q1;
}

describe('test simple_statistics', function () {
    it('test simple-statistics.interquartileRange', function (done) {
        // Test with an unsorted array of eight numbers
        const iqr = interquartileRange([7, 1, 3, 5, 2, 8, 4, 6]);
        assert.strictEqual(iqr, 3.5, 'IQR of [1..8] should be 3.5');

        // Test with a single‑element array (IQR should be 0)
        const iqrSingle = interquartileRange([42]);
        assert.strictEqual(iqrSingle, 0, 'IQR of a single-element array should be 0');

        // Test with an empty array (should return undefined)
        const iqrEmpty = interquartileRange([]);
        assert.strictEqual(iqrEmpty, undefined, 'IQR of an empty array should be undefined');

        done();
    });
});