let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.shuffle', function(done) {
        // original array
        const original = [1, 2, 3, 4];

        // deterministic random source that always returns 0.5
        const deterministicRandom = () => 0.5;

        // perform shuffle
        const shuffled = simple_statistics.shuffle(original, deterministicRandom);

        // the shuffle should return a new array (different reference)
        assert.notStrictEqual(shuffled, original, 'shuffle should not modify the original array reference');

        // the original array must remain unchanged
        assert.deepStrictEqual(original, [1, 2, 3, 4], 'original array should stay unchanged');

        // the shuffled array should contain the same elements
        assert.deepStrictEqual(shuffled.slice().sort((a, b) => a - b), [1, 2, 3, 4], 'shuffled array must contain the same elements');

        // with a random source that always returns 0.5, the Fisher‑Yates algorithm yields a predictable order
        // For the array [1,2,3,4] the expected result is [1,4,2,3]
        assert.deepStrictEqual(shuffled, [1, 4, 2, 3], 'shuffled array does not match expected deterministic order');

        done();
    });
});