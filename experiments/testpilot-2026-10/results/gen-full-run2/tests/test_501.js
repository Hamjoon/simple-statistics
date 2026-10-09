let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.shuffleInPlace', function (done) {
        // --- deterministic test -------------------------------------------------
        // Original array
        let arr = [1, 2, 3, 4, 5];

        // Sequence of values that will be returned by our custom random source.
        // The Fisher‑Yates implementation in simple‑statistics calls the random
        // function once for every index, including i = 0.  Therefore we need one
        // extra value (the last one is never used for a swap, but it prevents
        // `undefined` from being returned).
        const sequence = [0, 0.5, 0.9, 0.3, 0]; // 5 values for a 5‑element array
        let i = 0;
        function deterministicRandom() {
            return sequence[i++];
        }

        // Shuffle in‑place using the deterministic random source.
        const returned = simple_statistics.shuffleInPlace(arr, deterministicRandom);

        // The function should return the same array reference.
        assert.strictEqual(returned, arr);

        // Expected result after applying the algorithm with the above random values:
        //   i = 4, j = floor(0   * 5) = 0  -> swap 4 ↔ 0  => [5,2,3,4,1]
        //   i = 3, j = floor(0.5 * 4) = 2  -> swap 3 ↔ 2 => [5,2,4,3,1]
        //   i = 2, j = floor(0.9 * 3) = 2  -> swap 2 ↔ 2 => unchanged
        //   i = 1, j = floor(0.3 * 2) = 0  -> swap 1 ↔ 0 => [2,5,4,3,1]
        //   i = 0, j = floor(0   * 1) = 0  -> swap 0 ↔ 0 => unchanged
        const expected = [2, 5, 4, 3, 1];
        assert.deepStrictEqual(arr, expected);

        // --- nondeterministic test (default Math.random) ------------------------
        // Ensure the function works without a custom random source and still
        // returns a permutation containing the same elements.
        let arr2 = [1, 2, 3, 4, 5];
        simple_statistics.shuffleInPlace(arr2);
        // The shuffled array should still have exactly the same elements.
        assert.deepStrictEqual(arr2.slice().sort((a, b) => a - b), [1, 2, 3, 4, 5]);

        done();
    });
});