let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.gammaln', function(done) {
        // Known values for the natural logarithm of the Gamma function
        const testCases = [
            { n: 1,   expected: 0 },                                 // ln(Gamma(1)) = ln(1) = 0
            { n: 2,   expected: 0 },                                 // ln(Gamma(2)) = ln(1) = 0
            { n: 3,   expected: Math.log(2) },                       // ln(Gamma(3)) = ln(2) ≈ 0.693147...
            { n: 4,   expected: Math.log(6) },                       // ln(Gamma(4)) = ln(6) ≈ 1.791759...
            { n: 0.5, expected: 0.5723649429247001 },                // ln(Gamma(0.5)) = ln(sqrt(pi))
            { n: 5.5, expected: 3.9578139676187165 }                 // pre‑computed value
        ];

        const epsilon = 1e-12; // tolerance for floating point comparison

        testCases.forEach(({ n, expected }) => {
            const result = simple_statistics.gammaln(n);
            // Compare using tolerance for all cases (including integer expected values)
            const diff = Math.abs(result - expected);
            assert.ok(
                diff < epsilon,
                `gammaln(${n}) ≈ ${expected}, got ${result} (diff ${diff})`
            );
        });

        done();
    });
});