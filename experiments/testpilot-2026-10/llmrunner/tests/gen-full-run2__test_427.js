let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.quantileSorted', function(done) {
        // Sorted array for testing
        const arr = [1, 2, 3, 4];

        // p = 0 should return the first element
        assert.strictEqual(simple_statistics.quantileSorted(arr, 0), 1);

        // p = 1 should return the last element
        assert.strictEqual(simple_statistics.quantileSorted(arr, 1), 4);

        // Median (p = 0.5) – linear interpolation between the two middle values
        assert.strictEqual(simple_statistics.quantileSorted(arr, 0.5), 2.5);

        // Quarter quantile (p = 0.25)
        // Using simple-statistics' R‑3 method, the result is 1.5
        assert.strictEqual(simple_statistics.quantileSorted(arr, 0.25), 1.5);

        // Empty array should throw an error
        assert.throws(() => simple_statistics.quantileSorted([], 0.5));

        done();
    });
});