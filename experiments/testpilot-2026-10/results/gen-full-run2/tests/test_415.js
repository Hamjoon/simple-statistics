let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.quantileRank', function (done) {
        const epsilon = 1e-12;

        // Basic ordered array
        const arr1 = [1, 2, 3, 4, 5];
        // simple-statistics defines rank as (countLess + countEqual) / n
        assert.ok(Math.abs(simple_statistics.quantileRank(arr1, 1) - 0.2) < epsilon,
            `Expected rank ~0.2 for value 1, got ${simple_statistics.quantileRank(arr1, 1)}`);
        assert.ok(Math.abs(simple_statistics.quantileRank(arr1, 5) - 1) < epsilon,
            `Expected rank ~1 for value 5, got ${simple_statistics.quantileRank(arr1, 5)}`);
        assert.ok(Math.abs(simple_statistics.quantileRank(arr1, 3) - 0.6) < epsilon,
            `Expected rank ~0.6 for value 3, got ${simple_statistics.quantileRank(arr1, 3)}`);

        // Unordered input should be handled the same way
        const arr2 = [5, 1, 3, 2, 4];
        assert.ok(Math.abs(simple_statistics.quantileRank(arr2, 1) - 0.2) < epsilon,
            `Expected rank ~0.2 for value 1, got ${simple_statistics.quantileRank(arr2, 1)}`);
        assert.ok(Math.abs(simple_statistics.quantileRank(arr2, 5) - 1) < epsilon,
            `Expected rank ~1 for value 5, got ${simple_statistics.quantileRank(arr2, 5)}`);
        assert.ok(Math.abs(simple_statistics.quantileRank(arr2, 3) - 0.6) < epsilon,
            `Expected rank ~0.6 for value 3, got ${simple_statistics.quantileRank(arr2, 3)}`);

        // Array with duplicate values
        const arr3 = [1, 2, 2, 2, 3];
        // According to the library: rank = (countLess + countEqual) / n
        // countLess = 1 (value 1), countEqual = 3 (three 2's), n = 5
        // rank = (1 + 3) / 5 = 0.8
        const rank = simple_statistics.quantileRank(arr3, 2);
        assert.ok(Math.abs(rank - 0.8) < epsilon,
            `Expected rank ~0.8, got ${rank}`);

        done();
    });
});