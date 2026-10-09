let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.permutationsHeap', function(done) {
        const input = [1, 2, 3];
        const result = simple_statistics.permutationsHeap(input);

        // Should produce exactly 3! = 6 permutations
        assert.strictEqual(result.length, 6);

        // Expected permutations (order may differ, so compare as sets)
        const expected = [
            [1, 2, 3],
            [2, 1, 3],
            [3, 1, 2],
            [1, 3, 2],
            [2, 3, 1],
            [3, 2, 1]
        ];

        const resultSet = new Set(result.map(p => JSON.stringify(p)));
        const expectedSet = new Set(expected.map(p => JSON.stringify(p)));

        assert.deepStrictEqual(resultSet, expectedSet);
        done();
    });
});