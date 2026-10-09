let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.cumulativeStdLogisticProbability', function(done) {
        // Helper for approximate equality
        function approxEqual(actual, expected, epsilon = 1e-12) {
            assert.ok(Math.abs(actual - expected) < epsilon, `Expected ${expected}, but got ${actual}`);
        }

        // Exact cases
        approxEqual(simple_statistics.cumulativeStdLogisticProbability(0), 0.5);
        approxEqual(simple_statistics.cumulativeStdLogisticProbability(1), 1 / (Math.exp(-1) + 1));
        approxEqual(simple_statistics.cumulativeStdLogisticProbability(-1), 1 / (Math.exp(1) + 1));

        // Edge cases: large magnitude
        approxEqual(simple_statistics.cumulativeStdLogisticProbability(20), 1, 1e-9);
        approxEqual(simple_statistics.cumulativeStdLogisticProbability(-20), 0, 1e-9);

        done();
    });
});