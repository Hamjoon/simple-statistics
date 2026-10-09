let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.shuffle', function(done) {
        // Arrange: a known array and a deterministic random source
        const original = [1, 2, 3, 4];
        const originalCopy = original.slice(); // keep a snapshot to verify immutability

        // Act: shuffle with a random source that always returns 0
        const shuffled = simple_statistics.shuffle(original, () => 0);

        // Assert: the original array must remain unchanged
        assert.deepStrictEqual(original, originalCopy, 'original array was mutated');

        // The deterministic sequence (always 0) yields a predictable permutation:
        // step i=3 -> swap 3 with 0 => [4,2,3,1]
        // step i=2 -> swap 2 with 0 => [3,2,4,1]
        // step i=1 -> swap 1 with 0 => [2,3,4,1]
        const expected = [2, 3, 4, 1];
        assert.deepStrictEqual(shuffled, expected, 'shuffle did not produce the expected permutation');

        done();
    });
});