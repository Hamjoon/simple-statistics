let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.permutationsHeap', function(done) {
        const input = [1, 2, 3];
        // Use a copy of the input so the original array remains unchanged for the expectation
        const result = simple_statistics.permutationsHeap(input.slice());

        const expected = [
            [1, 2, 3],
            [2, 1, 3],
            [3, 1, 2],
            [1, 3, 2],
            [2, 3, 1],
            [3, 2, 1]
        ];

        assert.deepStrictEqual(result, expected);
        done();
    });
});