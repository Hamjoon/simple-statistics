let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.shuffleInPlace', function(done) {
        // deterministic random source that always returns 0.5
        const deterministicRandom = () => 0.5;

        const original = [1, 2, 3, 4];
        const returned = simple_statistics.shuffleInPlace(original, deterministicRandom);

        // The function should return the same array reference
        assert.strictEqual(returned, original, 'shuffleInPlace should return the original array');

        // Expected result after applying the Fisher‑Yates steps with r = 0.5 each time
        const expected = [1, 4, 2, 3];
        assert.deepStrictEqual(original, expected, 'array should be shuffled to the deterministic order');

        done();
    });
});