let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleKurtosis', function(done) {
        // Verify correct kurtosis for a known dataset
        const data = [1, 2, 2, 3, 5];
        const result = simple_statistics.sampleKurtosis(data);
        const expected = 1.4555765595463122;
        // Use a tolerance to account for floating‑point rounding
        assert.ok(Math.abs(result - expected) < 1e-12,
            `Expected ${expected}, but got ${result}`);

        // Verify that an error is thrown when fewer than 4 points are supplied
        assert.throws(
            () => simple_statistics.sampleKurtosis([1, 2, 3]),
            /requires at least four data points/
        );

        done();
    });
});