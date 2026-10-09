let mocha = require('mocha');
let assert = require('assert');
let ss = require('simple-statistics');

describe('test simple_statistics', function () {
    // Helper that uses ss.combinations (which returns an array of
    // combinations) to compute the binomial coefficient C(n, k).
    function binomial(n, k) {
        // If k > n the coefficient is 0.
        if (k > n) return 0;
        // Create a dummy array of length n (e.g. [0,1,2,...,n-1]).
        const source = Array.from({ length: n }, (_, i) => i);
        // ss.combinations returns an array of all k‑element subsets.
        // Its length is the binomial coefficient.
        return ss.combinations(source, k).length;
    }

    it('test simple-statistics.combinations', function (done) {
        // Basic binomial coefficient cases
        assert.strictEqual(binomial(5, 3), 10);
        assert.strictEqual(binomial(0, 0), 1);
        assert.strictEqual(binomial(5, 0), 1);
        assert.strictEqual(binomial(5, 5), 1);
        // k > n should yield 0
        assert.strictEqual(binomial(5, 6), 0);
        // Larger numbers
        assert.strictEqual(binomial(10, 4), 210);
        // Symmetry property: C(n, k) === C(n, n‑k)
        assert.strictEqual(binomial(10, 4), binomial(10, 6));
        done();
    });
});