let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sumNthPowerDeviations', function(done) {
        // Basic array
        const arr = [1, 2, 3, 4, 5];
        // mean = 3, sum of (xi-mean)^2 = 10
        assert.strictEqual(simple_statistics.sumNthPowerDeviations(arr, 2), 10);
        // sum of (xi-mean)^1 should be 0
        assert.strictEqual(simple_statistics.sumNthPowerDeviations(arr, 1), 0);
        // sum of (xi-mean)^3 should also be 0 for this symmetric set
        assert.strictEqual(simple_statistics.sumNthPowerDeviations(arr, 3), 0);
        // Array with negative values
        const arr2 = [-1, 0, 1];
        // mean = 0, sum of squares = 2
        assert.strictEqual(simple_statistics.sumNthPowerDeviations(arr2, 2), 2);
        // n = 0 should return the count of elements (each term is 1)
        assert.strictEqual(simple_statistics.sumNthPowerDeviations(arr2, 0), 3);
        done();
    });
});