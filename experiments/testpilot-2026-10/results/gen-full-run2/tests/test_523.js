let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.standardDeviation', function(done) {
        // Edge case: single-element array should return 0
        assert.strictEqual(simple_statistics.standardDeviation([42]), 0);

        // Typical case: compare against a manually‑computed value
        // Data set: [2, 4, 4, 4, 5, 5, 7, 9]
        // Mean = 5
        // Sum of squared deviations = 26
        // Population variance = 26 / 8 = 3.25
        // Expected standard deviation = sqrt(3.25)
        const data = [2, 4, 4, 4, 5, 5, 7, 9];
        const expected = Math.sqrt(3.25);
        const actual = simple_statistics.standardDeviation(data);

        // Allow a tiny tolerance for floating‑point rounding
        assert.ok(Math.abs(actual - expected) < 1e-12, `Expected ${expected}, got ${actual}`);

        done();
    });
});