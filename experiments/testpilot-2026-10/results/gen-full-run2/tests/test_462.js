let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleKurtosis', function(done) {
        // Known dataset where the sample kurtosis can be calculated manually.
        const data = [1, 2, 3, 4, 5];
        const result = simple_statistics.sampleKurtosis(data);
        // Expected value is -1.2 (see manual calculation in the test description).
        assert.ok(Math.abs(result + 1.2) < 1e-12, `Expected -1.2, got ${result}`);

        // Verify that the function throws an error when fewer than four data points are provided.
        assert.throws(
            () => simple_statistics.sampleKurtosis([1, 2, 3]),
            /sampleKurtosis requires at least four data points/
        );

        done();
    });
});