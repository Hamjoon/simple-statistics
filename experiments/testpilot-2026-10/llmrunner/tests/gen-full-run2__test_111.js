let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.coefficientOfVariation', function (done) {
        // Typical case
        const data = [1, 2, 3, 4, 5];
        const cv = simple_statistics.coefficientOfVariation(data);
        // coefficient of variation = sample standard deviation / mean
        // mean = 3, sample variance = 2.5, std dev = sqrt(2.5)
        const expected = Math.sqrt(2.5) / 3;
        assert.ok(
            Math.abs(cv - expected) < 1e-12,
            `Expected ${expected}, got ${cv}`
        );

        // Edge case: empty array should throw an error because
        // coefficientOfVariation internally calls sampleVariance,
        // which requires at least two data points.
        assert.throws(
            () => simple_statistics.coefficientOfVariation([]),
            /sampleVariance requires at least two data points/
        );

        done();
    });
});