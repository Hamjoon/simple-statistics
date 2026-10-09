let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.permutationsHeap', function(done) {
        const input = [1, 2, 3];
        const result = simple_statistics.permutationsHeap(input);
        const expected = [
            [1, 2, 3],
            [2, 1, 3],
            [3, 1, 2],
            [1, 3, 2],
            [2, 3, 1],
            [3, 2, 1]
        ];
        // Verify the permutations are exactly as expected (order matters for Heap's algorithm)
        assert.deepStrictEqual(result, expected);
        // Verify the number of permutations equals n!
        assert.strictEqual(result.length, 6);
        done();
    });
});