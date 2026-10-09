let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.shuffle', function(done) {
        // original input
        const input = [1, 2, 3, 4];
        const originalCopy = input.slice(); // keep a copy to verify immutability

        // deterministic random source – returns a known sequence of numbers
        // Fisher‑Yates uses: j = Math.floor(random() * (i + 1))
        // Sequence chosen to produce a predictable permutation:
        // i = 3 → j = floor(0.99 * 4) = 3 (no swap)
        // i = 2 → j = floor(0.01 * 3) = 0 (swap positions 2 and 0)
        // i = 1 → j = floor(0.5  * 2) = 1 (no swap)
        const seq = [0.99, 0.01, 0.5];
        let idx = 0;
        const deterministicRandom = () => seq[idx++] ?? 0;

        // perform shuffle
        const shuffled = simple_statistics.shuffle(input, deterministicRandom);

        // 1. original array must remain unchanged
        assert.deepStrictEqual(input, originalCopy, 'original array was mutated');

        // 2. shuffled result must be a permutation of the original values
        assert.deepStrictEqual(
            shuffled.slice().sort((a, b) => a - b),
            originalCopy.slice().sort((a, b) => a - b),
            'shuffled result is not a permutation of the input'
        );

        // 3. with the deterministic source we know the exact expected order
        const expected = [3, 2, 1, 4];
        assert.deepStrictEqual(shuffled, expected, 'deterministic shuffle did not produce expected order');

        done();
    });
});