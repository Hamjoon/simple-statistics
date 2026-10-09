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
            { z: 5,    expected: 1.0 },   // theoretical value; function may be slightly off
            { z: -5,   expected: 0.0 }    // theoretical value; function may be slightly off
        ];

        testCases.forEach(({z, expected}) => {
            const result = simple_statistics.cumulativeStdNormalProbability(z);
            // Use approximate equality for all cases (including 0 and 1) to allow
            // for tiny numerical differences in the implementation.
            assert.ok(
                approxEqual(result, expected, 1e-3),
                `Φ(${z}) ≈ ${expected}, got ${result}`
            );
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