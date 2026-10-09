let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sumNthPowerDeviations', function(done) {
        // Basic sanity checks
        const arr1 = [1, 2, 3];
        // mean = 2, deviations = [-1,0,1]
        assert.strictEqual(simple_statistics.sumNthPowerDeviations(arr1, 2), 2); // (-1)^2 + 0^2 + 1^2 = 2
        assert.strictEqual(simple_statistics.sumNthPowerDeviations(arr1, 3), 0); // (-1)^3 + 0^3 + 1^3 = 0

        const arr2 = [2, 4, 6, 8];
        // mean = 5, deviations = [-3,-1,1,3]
        assert.strictEqual(simple_statistics.sumNthPowerDeviations(arr2, 2), 20); // 9+1+1+9 = 20
        assert.strictEqual(simple_statistics.sumNthPowerDeviations(arr2, 1), 0);  // sum of deviations always 0

        done();
    });
});