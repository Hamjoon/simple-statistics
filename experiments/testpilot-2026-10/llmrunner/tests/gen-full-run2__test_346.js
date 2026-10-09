let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.poissonDistribution', function (done) {
        // lambda must be strictly positive; non‑positive values should return undefined
        assert.strictEqual(simple_statistics.poissonDistribution(0), undefined);
        assert.strictEqual(simple_statistics.poissonDistribution(-3), undefined);

        // test a known distribution (lambda = 5)
        const lambda = 5;
        const dist = simple_statistics.poissonDistribution(lambda);

        // result should be an array
        assert(Array.isArray(dist), 'Result should be an array');

        // helper: factorial
        const factorial = (n) => {
            let f = 1;
            for (let i = 2; i <= n; i++) f *= i;
            return f;
        };

        // first few probabilities should match the Poisson PMF
        const eps = 1e-12;
        const pmf = (k) => (Math.exp(-lambda) * Math.pow(lambda, k)) / factorial(k);
        for (let k = 0; k < 5; k++) {
            assert(
                Math.abs(dist[k] - pmf(k)) < eps,
                `PMF mismatch at k=${k}`
            );
        }

        // the probabilities should sum to (approximately) 1.
        // simple-statistics truncates the tail when the remaining probability
        // becomes negligible, so we allow a slightly larger tolerance.
        const total = dist.reduce((a, b) => a + b, 0);
        const totalEps = 1e-4; // enough to cover the truncation error
        assert(
            Math.abs(total - 1) < totalEps,
            `Total probability ${total} not close to 1 (tolerance ${totalEps})`
        );

        done();
    });
});