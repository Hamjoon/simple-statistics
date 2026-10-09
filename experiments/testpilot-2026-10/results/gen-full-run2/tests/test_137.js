let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.cumulativeStdNormalProbability', function(done) {
        // Helper to compare floating point numbers within a tolerance
        function closeEnough(actual, expected, epsilon = 1e-4) {
            return Math.abs(actual - expected) < epsilon;
        }

        // Known values for the cumulative standard normal distribution
        const testCases = [
            { z: 0,    expected: 0.5 },
            { z: 0.5,  expected: 0.6915 },   // Φ(0.5) ≈ 0.6915
            { z: -0.5, expected: 0.3085 },   // Φ(-0.5) ≈ 0.3085
            { z: 1,    expected: 0.8413 },   // Φ(1)   ≈ 0.8413
            { z: -1,   expected: 0.1587 },   // Φ(-1)  ≈ 0.1587
            { z: 2,    expected: 0.9772 },   // Φ(2)   ≈ 0.9772
            { z: -2,   expected: 0.0228 }    // Φ(-2)  ≈ 0.0228
        ];

        testCases.forEach(({z, expected}) => {
            const result = simple_statistics.cumulativeStdNormalProbability(z);
            assert.ok(
                closeEnough(result, expected),
                `cumulativeStdNormalProbability(${z}) = ${result}, expected ≈ ${expected}`
            );
        });

        // Additional check for the rounding behavior on negative values
        // The function returns a value rounded to 4 decimal places for negatives.
        const negZ = -0.1234;
        const negResult = simple_statistics.cumulativeStdNormalProbability(negZ);
        // Compute the positive side using the same function (should be the table value)
        const posResult = simple_statistics.cumulativeStdNormalProbability(Math.abs(negZ));
        // The negative result should equal 1 - posResult, rounded to 4 decimals
        const expectedNeg = +(1 - posResult).toFixed(4);
        assert.strictEqual(negResult, expectedNeg, `Negative rounding mismatch for z=${negZ}`);

        done();
    });
});