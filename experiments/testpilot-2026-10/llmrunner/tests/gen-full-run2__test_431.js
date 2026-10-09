let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quickselect', function(done) {
        // original array from the documentation example
        const arr = [65, 28, 59, 33, 21, 56, 22, 95, 50, 12, 90, 53, 28, 77, 39];
        const k = 8; // we want the element that would be at index 8 in a sorted array

        // run the algorithm
        simple_statistics.quickselect(arr, k);

        // the (k+1)-th smallest value in the original array is 53
        const expectedPivot = 53;
        assert.strictEqual(arr[k], expectedPivot, 'pivot value should be the (k+1)-th smallest');

        // all elements left of k must be <= pivot
        for (let i = 0; i < k; i++) {
            assert.ok(arr[i] <= expectedPivot, `arr[${i}] (${arr[i]}) should be <= pivot`);
        }

        // all elements right of k must be >= pivot
        for (let i = k + 1; i < arr.length; i++) {
            assert.ok(arr[i] >= expectedPivot, `arr[${i}] (${arr[i]}) should be >= pivot`);
        }

        done();
    });
});