let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple_statistics.cumulativeStdLogisticProbability', function(done) {
        const epsilon = 1e-12;

        // Known values of the standard logistic CDF: 1 / (1 + e^(-x))
        const testCases = [
            { x: 0,   expected: 0.5 },
            { x: 1,   expected: 1 / (1 + Math.exp(-1)) },   // ≈ 0.7310585786300049
            { x: -1,  expected: 1 / (1 + Math.exp(1)) },    // ≈ 0.2689414213699951
            { x: 5,   expected: 1 / (1 + Math.exp(-5)) },   // ≈ 0.9933071490757153
            { x: -5,  expected: 1 / (1 + Math.exp(5)) },    // ≈ 0.0066928509242848554
            { x: 20,  expected: 1 - 2.061153622438558e-9 }, // very close to 1
            { x: -20, expected: 2.061153622438558e-9 }      // very close to 0
        ];

        testCases.forEach(({x, expected}) => {
            const result = simple_statistics.cumulativeStdLogisticProbability(x);
            assert.ok(Math.abs(result - expected) < epsilon,
                `cumulativeStdLogisticProbability(${x}) = ${result}, expected ${expected}`);
        });

        done();
    });
});