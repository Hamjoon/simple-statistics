let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.binomialDistribution', function(done) {
        const epsilon = 1e-12;
        function arraysClose(actual, expected) {
            assert.strictEqual(actual.length, expected.length, 'array lengths differ');
            for (let i = 0; i < actual.length; i++) {
                const diff = Math.abs(actual[i] - expected[i]);
                assert.ok(diff < epsilon, `value at index ${i} differs: ${actual[i]} vs ${expected[i]} (diff ${diff})`);
            }
        }

        // Basic case: n = 5, p = 0.5
        const dist1 = simple_statistics.binomialDistribution(5, 0.5);
        const expected1 = [0.03125, 0.15625, 0.3125, 0.3125, 0.15625, 0.03125];
        arraysClose(dist1, expected1);

        // Edge case: probability = 0
        const dist2 = simple_statistics.binomialDistribution(3, 0);
        const expected2 = [1, 0, 0, 0];
        arraysClose(dist2, expected2);

        done();
    });
});