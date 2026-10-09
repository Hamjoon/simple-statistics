let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quickselect', function(done) {
        // Basic test: whole‑array selection
        let arr = [65, 28, 59, 33, 21, 56, 22, 95, 50, 12, 90, 53, 28, 77, 39];
        let k = 8; // zero‑based index
        let expected = arr.slice().sort((a, b) => a - b); // fully sorted copy

        simple_statistics.quickselect(arr, k);

        // k‑th element must be the k‑th smallest value
        assert.strictEqual(arr[k], expected[k], 'k‑th element should match sorted order');

        // All elements left of k must be ≤ arr[k]
        for (let i = 0; i < k; i++) {
            assert.ok(arr[i] <= arr[k], `arr[${i}] ≤ arr[${k}]`);
        }
        // All elements right of k must be ≥ arr[k]
        for (let i = k + 1; i < arr.length; i++) {
            assert.ok(arr[i] >= arr[k], `arr[${i}] ≥ arr[${k}]`);
        }

        // Sub‑range test: selection with explicit left/right bounds
        let arr2 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
        let left = 2;
        let right = 6;
        let subK = 4; // overall index in arr2
        // Expected order statistic within the sub‑range [left, right]
        let subSorted = arr2.slice(left, right + 1).sort((a, b) => a - b);
        simple_statistics.quickselect(arr2, subK, left, right);

        // Verify the element at subK is the correct one for the sub‑range
        assert.strictEqual(
            arr2[subK],
            subSorted[subK - left],
            'sub‑range k‑th element should match sorted sub‑range'
        );

        // Verify partitioning inside the sub‑range
        for (let i = left; i <= right; i++) {
            if (i < subK) {
                assert.ok(arr2[i] <= arr2[subK], `arr2[${i}] ≤ arr2[${subK}]`);
            } else if (i > subK) {
                assert.ok(arr2[i] >= arr2[subK], `arr2[${i}] ≥ arr2[${subK}]`);
            }
        }

        done();
    });
});