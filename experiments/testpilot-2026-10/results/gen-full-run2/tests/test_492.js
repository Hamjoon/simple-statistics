let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.shuffle', function(done) {
        // 1. Verify that shuffle returns a permutation and does not modify the original array
        const original = [1, 2, 3, 4, 5];
        const shuffled = simple_statistics.shuffle(original);
        // original array should stay unchanged
        assert.deepStrictEqual(original, [1, 2, 3, 4, 5]);
        // shuffled array should have the same length
        assert.strictEqual(shuffled.length, original.length);
        // shuffled array should contain exactly the same elements (order may differ)
        assert.deepStrictEqual(shuffled.slice().sort(), original.slice().sort());

        // 2. Verify deterministic behavior with a custom random source
        // A random source that always returns 0 forces a predictable shuffle order.
        const alwaysZero = () => 0;
        const arr = [1, 2, 3, 4];
        const deterministicResult = simple_statistics.shuffle(arr, alwaysZero);
        // Expected result when always picking index 0 in Fisher‑Yates:
        // Step i=3: swap 0↔3 => [4,2,3,1]
        // Step i=2: swap 0↔2 => [3,2,4,1]
        // Step i=1: swap 0↔1 => [2,3,4,1]
        assert.deepStrictEqual(deterministicResult, [2, 3, 4, 1]);

        done();
    });
});