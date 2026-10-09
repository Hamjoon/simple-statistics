let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.cumulativeStdLogisticProbability', function(done) {
        const tol = 1e-12;
        const approxEqual = (actual, expected) => {
            assert.ok(Math.abs(actual - expected) < tol,
                `expected ${expected}, got ${actual}`);
        };

        // Known values for the standard logistic CDF: 1 / (1 + e^(-x))
        approxEqual(simple_statistics.cumulativeStdLogisticProbability(0), 0.5);
        approxEqual(simple_statistics.cumulativeStdLogisticProbability(1), 1 / (1 + Math.exp(-1)));
        approxEqual(simple_statistics.cumulativeStdLogisticProbability(-1), 1 / (1 + Math.exp(1)));
        approxEqual(simple_statistics.cumulativeStdLogisticProbability(10), 1 / (1 + Math.exp(-10)));
        approxEqual(simple_statistics.cumulativeStdLogisticProbability(-10), 1 / (1 + Math.exp(10)));

        done();
    });
});