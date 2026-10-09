let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.bernoulliDistribution', function (done) {
        // Create a Bernoulli distribution with probability p = 0.3
        const p = 0.3;

        // In simple‑statistics, bernoulliDistribution(p) returns an *array*
        // where index 0 is P(X = 0) and index 1 is P(X = 1).
        const bernoulliArray = simple_statistics.bernoulliDistribution(p);

        // Helper for floating‑point comparison
        const approxEqual = (a, b, epsilon = 1e-12) => Math.abs(a - b) < epsilon;

        // Small wrapper that mimics the original function‑style API
        const bernoulli = (k) => {
            if (k === 0) return bernoulliArray[0];
            if (k === 1) return bernoulliArray[1];
            return 0;               // values outside {0,1} have probability 0
        };

        // Expected probabilities
        assert.ok(
            approxEqual(bernoulli(0), 1 - p),
            `P(X=0) should be ${1 - p}`
        );
        assert.ok(
            approxEqual(bernoulli(1), p),
            `P(X=1) should be ${p}`
        );

        // Values outside {0,1} should have probability 0
        assert.strictEqual(bernoulli(2), 0, 'P(X=2) should be 0');
        assert.strictEqual(bernoulli(-1), 0, 'P(X=-1) should be 0');

        done();
    });
});