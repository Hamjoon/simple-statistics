let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.harmonicMean', function(done) {
        // standard calculation – use a tolerance for floating‑point comparison
        const result = simple_statistics.harmonicMean([2, 3]);
        const expected = 2.4;
        const epsilon = 1e-12;               // acceptable error margin
        assert.ok(
            Math.abs(result - expected) < epsilon,
            `Harmonic mean of [2,3] should be ${expected} (got ${result})`
        );

        // empty array should throw
        assert.throws(
            () => simple_statistics.harmonicMean([]),
            /harmonicMean requires at least one data point/
        );

        // negative value should throw
        assert.throws(
            () => simple_statistics.harmonicMean([1, -2]),
            /harmonicMean requires only positive numbers/
        );

        // zero value should also throw
        assert.throws(
            () => simple_statistics.harmonicMean([0, 1]),
            /harmonicMean requires only positive numbers/
        );

        done();
    });
});