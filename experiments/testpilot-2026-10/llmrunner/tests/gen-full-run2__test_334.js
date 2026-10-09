let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.permutationTest', function(done) {
        // ---- deterministic random source ------------------------------------
        // shuffleInPlace in simple-statistics expects a function that returns a
        // number in [0,1). By returning a repeating sequence we make the shuffle
        // deterministic, which keeps the test reproducible.
        const deterministicRandom = (() => {
            const seq = [0.1, 0.9, 0.3, 0.7, 0.5];
            let i = 0;
            return function () {
                const val = seq[i % seq.length];
                i++;
                return val;
            };
        })();

        // ---- case 1: identical samples ---------------------------------------
        // When both groups are identical the observed statistic is 0 and every
        // permutation also yields 0, so the p‑value must be exactly 1.
        const identical = [1, 2, 3, 4];
        const pIdentical = simple_statistics.permutationTest(
            identical,
            identical,
            'two_side',
            20,                 // small k – sufficient for this deterministic case
            deterministicRandom
        );
        assert.strictEqual(pIdentical, 1, 'p‑value should be 1 for identical samples');

        // ---- case 2: invalid alternative argument ----------------------------
        // The function should throw an error when the alternative hypothesis is
        // not one of the allowed strings.
        assert.throws(() => {
            simple_statistics.permutationTest(
                [1, 2],
                [3, 4],
                'invalid_alternative',
                10,
                deterministicRandom
            );
        }, /alternative/);

        done();
    });
});