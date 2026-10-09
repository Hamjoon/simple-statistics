let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.numericSort', function(done) {
        // Basic unsorted array with negatives, integers and floats
        const unsorted = [5, 3, 9, -1, 0, 2.5];
        const sorted = simple_statistics.numericSort(unsorted);
        const expected = [-1, 0, 2.5, 3, 5, 9];
        assert.deepStrictEqual(sorted, expected, 'numericSort should sort numbers in ascending order');

        // Ensure the original array is not mutated (numericSort returns a new array)
        assert.deepStrictEqual(unsorted, [5, 3, 9, -1, 0, 2.5], 'original array should remain unchanged');

        // Already sorted input should be returned unchanged (but still a new array)
        const alreadySorted = [1, 2, 3];
        const resultSorted = simple_statistics.numericSort(alreadySorted);
        assert.deepStrictEqual(resultSorted, [1, 2, 3], 'already sorted array should stay the same');

        // Duplicate values should be preserved and correctly ordered
        const withDuplicates = [2, 2, 1];
        const resultDup = simple_statistics.numericSort(withDuplicates);
        assert.deepStrictEqual(resultDup, [1, 2, 2], 'duplicate values should be sorted correctly');

        done();
    });
});