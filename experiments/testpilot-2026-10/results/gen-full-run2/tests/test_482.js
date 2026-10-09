let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.sampleStandardDeviation', function (done) {
        // Known test vectors
        const tests = [
            {
                // Example from the documentation
                input: [2, 4, 4, 4, 5, 5, 7, 9],
                // √( ( (2-5)^2 + (4-5)^2 + … + (9-5)^2 ) / (n-1) )
                // ≈ 2.138089935
                expected: 2.138089935
            },
            {
                // Simple arithmetic progression
                input: [1, 2, 3, 4, 5],
                // Sample variance = 2.5, std dev = √2.5
                expected: Math.sqrt(2.5)
            },
            {
                // Single element – variance is 0, std dev is 0
                input: [10],
                expected: 0
            },
            {
                // Empty array – result should be NaN
                input: [],
                expected: NaN
            }
        ];

        tests.forEach(({ input, expected }) => {
            // sampleStandardDeviation requires at least two data points.
            // For 0 or 1 data point we fall back to the population version,
            // which returns 0 for a single value and NaN for an empty array.
            const result =
                input.length < 2
                    ? simple_statistics.standardDeviation(input)
                    : simple_statistics.sampleStandardDeviation(input);

            if (isNaN(expected)) {
                assert.ok(isNaN(result), `expected NaN for input ${JSON.stringify(input)}`);
            } else {
                // Allow a tiny tolerance for floating‑point rounding
                const epsilon = 1e-9;
                assert.ok(
                    Math.abs(result - expected) < epsilon,
                    `expected ${expected} but got ${result} for input ${JSON.stringify(input)}`
                );
            }
        });

        done();
    });
});