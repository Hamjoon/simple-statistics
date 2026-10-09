let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.permutationTest', function(done) {
        // deterministic random source that always returns a value close to 1
        const deterministicRandom = () => 0.9999999;

        const sampleX = [1, 2];
        const sampleY = [3, 4];
        const k = 1; // only one permutation (which will be the identity)

        // Default alternative ("two_side")
        const pTwoSide = simple_statistics.permutationTest(sampleX, sampleY, undefined, k, deterministicRandom);
        assert.strictEqual(pTwoSide, 1, 'p-value should be 1 for two-sided with deterministic identity permutation');

        // Greater alternative
        const pGreater = simple_statistics.permutationTest(sampleX, sampleY, "greater", k, deterministicRandom);
        assert.strictEqual(pGreater, 1, 'p-value should be 1 for greater alternative with deterministic identity permutation');

        // Less alternative
        const pLess = simple_statistics.permutationTest(sampleX, sampleY, "less", k, deterministicRandom);
        assert.strictEqual(pLess, 1, 'p-value should be 1 for less alternative with deterministic identity permutation');

        // Invalid alternative should throw
        assert.throws(() => {
            simple_statistics.permutationTest(sampleX, sampleY, "invalid_alt", k, deterministicRandom);
        }, /`alternative` must be either 'two_side', 'greater', or 'less'./);

        done();
    });
});