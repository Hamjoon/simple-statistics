let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.binomialDistribution', function(done) {
        const trials = 5;
        const p = 0.5;
        const result = simple_statistics.binomialDistribution(trials, p);

        // Expected binomial probabilities for n=5, p=0.5
        const expected = [
            0.03125, // C(5,0) * 0.5^0 * 0.5^5
            0.15625, // C(5,1) * 0.5^1 * 0.5^4
            0.3125,  // C(5,2) * 0.5^2 * 0.5^3
            0.3125,  // C(5,3) * 0.5^3 * 0.5^2
            0.15625, // C(5,4) * 0.5^4 * 0.5^1
            0.03125  // C(5,5) * 0.5^5 * 0.5^0
        ];

        // 1. Length should be trials + 1
        assert.strictEqual(result.length, trials + 1, 'Result length mismatch');

        // 2. Each probability should be close to the expected value
        const epsilon = 1e-12;
        for (let i = 0; i < result.length; i++) {
            assert.ok(Math.abs(result[i] - expected[i]) < epsilon,
                `Probability at index ${i} differs: expected ${expected[i]}, got ${result[i]}`);
        }

        // 3. Sum of probabilities should be approximately 1
        const sum = result.reduce((a, b) => a + b, 0);
        assert.ok(Math.abs(sum - 1) < epsilon, `Sum of probabilities not 1: ${sum}`);

        done();
    });
});