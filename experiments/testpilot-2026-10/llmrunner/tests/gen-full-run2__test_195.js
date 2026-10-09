let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.interquartileRange', function(done) {
        // Even number of elements
        const even = [1,2,3,4,5,6,7,8];
        const iqrEven = simple_statistics.interquartileRange(even);
        assert.strictEqual(iqrEven, 4, 'IQR of even-sized array should be 4');

        // Unsorted input (same values as even)
        const unsorted = [8,1,3,7,5,2,6,4];
        const iqrUnsorted = simple_statistics.interquartileRange(unsorted);
        assert.strictEqual(iqrUnsorted, 4, 'IQR should be order‑independent');

        // Odd number of elements
        const odd = [1,2,3,4,5];
        const iqrOdd = simple_statistics.interquartileRange(odd);
        // simple-statistics includes the median in both halves, so Q1 = 2 and Q3 = 4 → IQR = 2
        assert.strictEqual(iqrOdd, 2, 'IQR of odd-sized array should be 2');

        // All identical values
        const identical = [5,5,5,5];
        const iqrIdentical = simple_statistics.interquartileRange(identical);
        assert.strictEqual(iqrIdentical, 0, 'IQR of identical values should be 0');

        done();
    });
});