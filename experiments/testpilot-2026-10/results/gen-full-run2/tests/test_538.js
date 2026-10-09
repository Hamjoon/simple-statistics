let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sumNthPowerDeviations', function(done) {
        // Test data
        const data = [1, 2, 3, 4, 5]; // mean = 3

        // n = 2 (uses the optimized branch)
        const sumSq = simple_statistics.sumNthPowerDeviations(data, 2);
        // Expected: (1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2 = 4 + 1 + 0 + 1 + 4 = 10
        assert.strictEqual(sumSq, 10, 'sum of squared deviations should be 10');

        // n = 3 (uses Math.pow)
        const sumCube = simple_statistics.sumNthPowerDeviations(data, 3);
        // Expected: (-2)^3 + (-1)^3 + 0^3 + 1^3 + 2^3 = -8 -1 + 0 + 1 + 8 = 0
        assert.strictEqual(sumCube, 0, 'sum of cubed deviations should be 0');

        // n = 4 (additional sanity check)
        const sumQuad = simple_statistics.sumNthPowerDeviations(data, 4);
        // Expected: (-2)^4 + (-1)^4 + 0^4 + 1^4 + 2^4 = 16 + 1 + 0 + 1 + 16 = 34
        assert.strictEqual(sumQuad, 34, 'sum of 4th power deviations should be 34');

        done();
    });
});