let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.cumulativeStdNormalProbability', function(done) {
        // Helper for approximate equality
        function approxEqual(actual, expected, epsilon = 1e-4) {
            return Math.abs(actual - expected) <= epsilon;
        }

        // Known values of the standard normal CDF (rounded to 4 decimal places)
        const testCases = [
            { z: 0,    expected: 0.5 },
            { z: 0.5,  expected: 0.6915 }, // ≈ Φ(0.5)
            { z: -0.5, expected: 0.3085 }, // 1 - Φ(0.5)
            { z: 1,    expected: 0.8413 },
            { z: -1,   expected: 0.1587 },
            { z: 2,    expected: 0.9772 },
            { z: -2,   expected: 0.0228 },
            { z: 5,    expected: 1.0 },   // table caps at 1 for very large z
            { z: -5,   expected: 0.0 }    // table caps at 0 for very small z
        ];

        testCases.forEach(({z, expected}) => {
            const result = simple_statistics.cumulativeStdNormalProbability(z);
            // For extreme values the function may return exactly 1 or 0,
            // otherwise we compare with a tolerance.
            if (expected === 0 || expected === 1) {
                assert.strictEqual(result, expected, `Φ(${z}) should be ${expected}`);
            } else {
                assert.ok(
                    approxEqual(result, expected),
                    `Φ(${z}) ≈ ${expected}, got ${result}`
                );
            }
        });

        // Additional check: ensure rounding works as described.
        // For a value just below a rounding threshold (e.g., 0.0049),
        // the index should round to 0 (Φ ≈ 0.5). For 0.0051 it should round to 1.
        const justBelow = simple_statistics.cumulativeStdNormalProbability(0.0049);
        const justAbove = simple_statistics.cumulativeStdNormalProbability(0.0051);
        assert.strictEqual(justBelow, 0.5, 'Value just below rounding threshold should map to 0.5');
        assert.notStrictEqual(justAbove, 0.5, 'Value just above rounding threshold should not map to 0.5');

        done();
    });
});