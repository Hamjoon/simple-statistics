let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.binomialDistribution', function(done) {
        // ----- Valid input test -----
        const trials = 2;
        const p = 0.5;
        const result = simple_statistics.binomialDistribution(trials, p);

        // Expected probabilities for Binomial(2, 0.5)
        const expected = [0.25, 0.5, 0.25];

        // Verify result shape
        assert.ok(Array.isArray(result), 'Result should be an array');
        assert.strictEqual(result.length, expected.length, 'Result length should match expected');

        // Verify each probability (allowing for floating‑point rounding)
        for (let i = 0; i < expected.length; i++) {
            assert.ok(
                Math.abs(result[i] - expected[i]) < 1e-12,
                `Probability at index ${i} should be ${expected[i]}, got ${result[i]}`
            );
        }

        // Verify that the probabilities sum to (approximately) 1
        const sum = result.reduce((a, b) => a + b, 0);
        assert.ok(Math.abs(sum - 1) < 1e-12, `Sum of probabilities should be 1, got ${sum}`);

        // ----- Invalid input tests -----
        // trials <= 0
        assert.strictEqual(simple_statistics.binomialDistribution(0, 0.5), undefined);
        // probability < 0
        assert.strictEqual(simple_statistics.binomialDistribution(5, -0.1), undefined);
        // probability > 1
        assert.strictEqual(simple_statistics.binomialDistribution(5, 1.2), undefined);
        // non‑integer trials
        assert.strictEqual(simple_statistics.binomialDistribution(2.5, 0.5), undefined);

        done();
    });
});