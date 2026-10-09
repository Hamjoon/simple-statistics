let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.binomialDistribution', function(done) {
        // Helper to compare floating point numbers with tolerance
        const approxEqual = (a, b, eps = 1e-12) => Math.abs(a - b) < eps;

        // 1. Valid input – compare against known binomial probabilities
        const trials = 5;
        const p = 0.5;
        const result = simple_statistics.binomialDistribution(trials, p);
        // Expected probabilities for k = 0..5
        const expected = [
            0.03125, // C(5,0) * 0.5^0 * 0.5^5
            0.15625, // C(5,1) * 0.5^1 * 0.5^4
            0.3125,  // C(5,2) * 0.5^2 * 0.5^3
            0.3125,  // C(5,3) * 0.5^3 * 0.5^2
            0.15625, // C(5,4) * 0.5^4 * 0.5^1
            0.03125  // C(5,5) * 0.5^5 * 0.5^0
        ];
        // The function should return an array with the same length as expected
        assert.strictEqual(result.length, expected.length, 'Result length should match expected length');

        // Each cell should be approximately equal to the expected value
        for (let i = 0; i < expected.length; i++) {
            assert.ok(approxEqual(result[i], expected[i]), `Cell ${i} differs: ${result[i]} vs ${expected[i]}`);
        }

        // The sum of the returned probabilities should be (almost) 1
        const sum = result.reduce((a, b) => a + b, 0);
        assert.ok(approxEqual(sum, 1), `Sum of probabilities should be 1, got ${sum}`);

        // 2. Edge cases – invalid inputs should return undefined
        assert.strictEqual(
            simple_statistics.binomialDistribution(-1, 0.5),
            undefined,
            'Negative trials should return undefined'
        );
        assert.strictEqual(
            simple_statistics.binomialDistribution(0, 0.5),
            undefined,
            'Zero trials should return undefined'
        );
        assert.strictEqual(
            simple_statistics.binomialDistribution(2.5, 0.5),
            undefined,
            'Non‑integer trials should return undefined'
        );
        assert.strictEqual(
            simple_statistics.binomialDistribution(3, -0.1),
            undefined,
            'Probability < 0 should return undefined'
        );
        assert.strictEqual(
            simple_statistics.binomialDistribution(3, 1.2),
            undefined,
            'Probability > 1 should return undefined'
        );

        done();
    });
});