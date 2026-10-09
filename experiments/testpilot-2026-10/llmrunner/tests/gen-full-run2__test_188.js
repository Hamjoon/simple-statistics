let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.harmonicMean', function (done) {
        // Single element should return the element itself
        assert.strictEqual(simple_statistics.harmonicMean([5]), 5);

        // Known value: harmonic mean of [1, 2, 4] = 3 / (1 + 0.5 + 0.25) = 1.7142857142857142
        const hm = simple_statistics.harmonicMean([1, 2, 4]);
        assert.ok(
            Math.abs(hm - 1.7142857142857142) < 1e-12,
            `Expected ~1.7142857142857142, got ${hm}`
        );

        // Empty array should throw an error (the library does not return NaN)
        assert.throws(
            () => simple_statistics.harmonicMean([]),
            /requires at least one data point/,
            'Expected an error for empty array'
        );

        done();
    });
});