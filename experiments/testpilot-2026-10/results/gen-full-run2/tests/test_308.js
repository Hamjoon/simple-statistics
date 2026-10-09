let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.minSorted', function(done) {
        // typical sorted array
        const arr1 = [-100, -10, 1, 2, 5];
        assert.strictEqual(simple_statistics.minSorted(arr1), -100);

        // single element array
        const arr2 = [42];
        assert.strictEqual(simple_statistics.minSorted(arr2), 42);

        // all non‑negative numbers
        const arr3 = [0, 3, 7, 10];
        assert.strictEqual(simple_statistics.minSorted(arr3), 0);

        // all negative numbers
        const arr4 = [-5, -4, -3, -2];
        assert.strictEqual(simple_statistics.minSorted(arr4), -5);

        done();
    });
});