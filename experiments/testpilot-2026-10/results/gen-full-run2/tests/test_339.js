let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.permutationsHeap', function(done) {
        // Empty array
        assert.deepStrictEqual(
            simple_statistics.permutationsHeap([]),
            [[]]
        );

        // Single element
        assert.deepStrictEqual(
            simple_statistics.permutationsHeap([42]),
            [[42]]
        );

        // Two elements
        const result2 = simple_statistics.permutationsHeap([1, 2]);
        const expected2 = [
            [1, 2],
            [2, 1]
        ];
        assert.deepStrictEqual(result2, expected2);

        // Three elements – verify exact order produced by Heap's algorithm
        const result3 = simple_statistics.permutationsHeap([1, 2, 3]);
        const expected3 = [
            [1, 2, 3],
            [2, 1, 3],
            [3, 1, 2],
            [1, 3, 2],
            [2, 3, 1],
            [3, 2, 1]
        ];
        assert.deepStrictEqual(result3, expected3);

        // Four elements – check count and uniqueness
        const arr = [1, 2, 3, 4];
        const perms = simple_statistics.permutationsHeap(arr);
        const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
        assert.strictEqual(perms.length, factorial(arr.length));

        const uniq = new Set(perms.map(p => p.join(',')));
        assert.strictEqual(uniq.size, perms.length);

        done();
    });
});