let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.sampleStandardDeviation', function () {
        // Known dataset: sample standard deviation should be sqrt(32/7)
        const data = [2, 4, 4, 4, 5, 5, 7, 9];
        const result = simple_statistics.sampleStandardDeviation(data);
        const expected = Math.sqrt(32 / 7);
        assert.ok(
            Math.abs(result - expected) < 1e-12,
            `Expected ${expected}, got ${result}`
        );

        // Edge case: array with a single element should throw an error
        const single = [5];
        assert.throws(
            () => simple_statistics.sampleStandardDeviation(single),
            /sampleVariance requires at least two data points/,
            'Expected an error for single-element array'
        );
    });
});