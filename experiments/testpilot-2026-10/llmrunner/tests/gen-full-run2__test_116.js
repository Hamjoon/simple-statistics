let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combinationsReplacement', function(done) {
        // Test k = 1 (base case)
        const resultK1 = simple_statistics.combinationsReplacement([5, 10, 15], 1);
        const expectedK1 = [[5], [10], [15]];
        assert.deepStrictEqual(resultK1, expectedK1, 'k=1 should return each element as a single‑element array');

        // Test k = 2 with three distinct elements
        const resultK2 = simple_statistics.combinationsReplacement([1, 2, 3], 2);
        const expectedK2 = [
            [1, 1], [1, 2], [1, 3],
            [2, 2], [2, 3],
            [3, 3]
        ];
        assert.deepStrictEqual(resultK2, expectedK2, 'k=2 should produce combinations with replacement in non‑decreasing order');

        // Test k = 3 with two elements (checks deeper recursion)
        const resultK3 = simple_statistics.combinationsReplacement([1, 2], 3);
        const expectedK3 = [
            [1, 1, 1],
            [1, 1, 2],
            [1, 2, 2],
            [2, 2, 2]
        ];
        assert.deepStrictEqual(resultK3, expectedK3, 'k=3 should correctly handle deeper recursion and replacement');

        done();
    });
});