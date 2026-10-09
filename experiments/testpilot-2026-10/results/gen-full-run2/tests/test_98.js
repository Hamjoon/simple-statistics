let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.ckmeans', function() {
        // Basic clustering test
        const data = [-1, 2, -1, 2, 4, 5, 6, -1, 2, -1];
        const result = simple_statistics.ckmeans(data, 3);
        const expected = [[-1, -1, -1, -1], [2, 2, 2], [4, 5, 6]];
        assert.deepStrictEqual(result, expected, 'ckmeans should produce the expected clusters');

        // Edge case: all values identical – should return a single cluster
        const identical = [5, 5, 5, 5];
        const resultIdentical = simple_statistics.ckmeans(identical, 2);
        // The function sorts the input, so we compare against the sorted array wrapped in another array
        assert.deepStrictEqual(resultIdentical, [identical.slice().sort((a, b) => a - b)], 'Identical values should yield one cluster');

        // Error case: requesting more clusters than data points
        assert.throws(
            () => simple_statistics.ckmeans([1, 2, 3], 5),
            /cannot generate more classes/,
            'Should throw when nClusters > data length'
        );
    });
});