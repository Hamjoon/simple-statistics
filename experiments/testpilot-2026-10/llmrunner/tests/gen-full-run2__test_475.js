let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleSkewness', function(done) {
        // Verify correct skewness calculation
        const data = [2, 4, 6, 3, 1];
        const expected = 0.590128656384365;
        const result = simple_statistics.sampleSkewness(data);
        assert.ok(
            Math.abs(result - expected) < 1e-12,
            `Expected ${expected}, but got ${result}`
        );

        // Verify that an error is thrown for insufficient data points
        assert.throws(
            () => simple_statistics.sampleSkewness([1, 2]),
            /requires at least three data points/
        );

        done();
    });
});