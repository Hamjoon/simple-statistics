let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.shuffleInPlace', function(done) {
        // deterministic random source returning 0.5 each call
        const values = [0.5, 0.5, 0.5];
        let idx = 0;
        function mockRandom() {
            return values[idx++] !== undefined ? values[idx-1] : 0;
        }

        const arr = [1, 2, 3, 4];
        const result = simple_statistics.shuffleInPlace(arr, mockRandom);

        // Expected permutation when using the above mockRandom:
        // step i=3: j = floor(0.5 * 4) = 2  => [1,2,4,3]
        // step i=2: j = floor(0.5 * 3) = 1  => [1,4,2,3]
        // step i=1: j = floor(0.5 * 2) = 1  => [1,4,2,3]
        const expected = [1, 4, 2, 3];

        // Verify that the function returns the same array reference
        assert.strictEqual(result, arr, 'shuffleInPlace should return the original array reference');

        // Verify that the array was shuffled to the expected order
        assert.deepStrictEqual(arr, expected, 'Array should be shuffled to the deterministic expected order');

        // Verify length unchanged
        assert.strictEqual(arr.length, 4, 'Array length should remain unchanged');

        done();
    });
});