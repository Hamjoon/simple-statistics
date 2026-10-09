let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.poissonDistribution', function(done) {
        const lambda = 1;
        const dist = simple_statistics.poissonDistribution(lambda);
        // The probability of 0 events should be e^(-lambda)
        const expectedFirst = Math.exp(-lambda);
        assert.ok(Math.abs(dist[0] - expectedFirst) < 1e-12, 'first probability mismatch');
        // The sum of the distribution should be approximately 1
        const sum = dist.reduce((acc, val) => acc + val, 0);
        assert.ok(Math.abs(sum - 1) < 1e-6, 'sum of probabilities not close to 1');
        done();
    });
});