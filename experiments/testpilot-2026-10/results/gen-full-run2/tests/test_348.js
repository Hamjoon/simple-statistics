let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.poissonDistribution', function (done) {
        const lambda = 1;

        // Get the distribution from the library.
        // The built‑in function returns a finite array (it truncates the tail),
        // so we allow a tiny amount of probability mass to be missing.
        const dist = simple_statistics.poissonDistribution(lambda);

        // The probability of 0 events should be e^(-lambda)
        const expectedFirst = Math.exp(-lambda);
        assert.ok(
            Math.abs(dist[0] - expectedFirst) < 1e-12,
            'first probability mismatch'
        );

        // The sum of the returned probabilities will be slightly less than 1
        // because the tail of the Poisson distribution is truncated.
        // We consider the test successful if the missing mass is below a
        // very small threshold (1e‑6).  This works for all reasonable λ.
        const sum = dist.reduce((acc, val) => acc + val, 0);
        const missingMass = Math.abs(1 - sum);
        assert.ok(
            missingMass < 1e-6,
            `sum of probabilities not close to 1 (missing mass = ${missingMass})`
        );

        done();
    });
});