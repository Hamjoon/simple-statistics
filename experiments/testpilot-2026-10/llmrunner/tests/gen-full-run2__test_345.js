let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.poissonDistribution', function(done) {
        // Invalid lambda should return undefined
        assert.strictEqual(simple_statistics.poissonDistribution(0), undefined);
        assert.strictEqual(simple_statistics.poissonDistribution(-3), undefined);

        // Valid lambda
        const lambda = 1;
        const dist = simple_statistics.poissonDistribution(lambda);

        // Result must be an array
        assert(Array.isArray(dist), 'Result should be an array');

        // Expected probabilities for the first few outcomes
        const expected0 = Math.exp(-lambda);                         // P(0)
        const expected1 = Math.exp(-lambda) * lambda;                // P(1)
        const expected2 = Math.exp(-lambda) * Math.pow(lambda, 2) / 2; // P(2)

        // Verify the first three values are correct (within a tight tolerance)
        assert.ok(Math.abs(dist[0] - expected0) < 1e-12, 'P(0) mismatch');
        assert.ok(Math.abs(dist[1] - expected1) < 1e-12, 'P(1) mismatch');
        assert.ok(Math.abs(dist[2] - expected2) < 1e-12, 'P(2) mismatch');

        // The sum of the distribution should be approximately 1.
        // simple-statistics truncates the tail, so allow a slightly larger tolerance.
        const sum = dist.reduce((a, b) => a + b, 0);
        assert.ok(Math.abs(sum - 1) < 1e-4, `Sum of probabilities ${sum} not close to 1`);

        done();
    });
});