let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quickselect', function(done) {
        // Helper to verify partition property
        function verifyPartition(arr, k) {
            const pivot = arr[k];
            for (let i = 0; i < k; i++) {
                assert.ok(arr[i] <= pivot, `Element at index ${i} (${arr[i]}) > pivot (${pivot})`);
            }
            for (let i = k + 1; i < arr.length; i++) {
                assert.ok(arr[i] >= pivot, `Element at index ${i} (${arr[i]}) < pivot (${pivot})`);
            }
        }

        // Small deterministic test cases
        const cases = [
            { arr: [5, 3, 1, 2, 4], k: 2 },
            { arr: [10], k: 0 },
            { arr: [2, 1], k: 0 },
            { arr: [2, 1], k: 1 },
        ];

        // Large random test case (triggers the >600 branch)
        const largeArray = Array.from({ length: 1000 }, () => Math.random() * 1000);
        const randomK = Math.floor(Math.random() * largeArray.length);
        cases.push({ arr: largeArray.slice(), k: randomK });

        // Run each case
        cases.forEach(({ arr, k }) => {
            const expected = arr.slice().sort((a, b) => a - b)[k];
            simple_statistics.quickselect(arr, k);
            assert.strictEqual(arr[k], expected, `quickselect did not place correct element at index ${k}`);
            verifyPartition(arr, k);
        });

        done();
    });
});