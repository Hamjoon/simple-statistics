let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.tTest', function(done) {
        const sample = [1, 2, 3, 4, 5, 6];
        const expectedValue = 3.385;
        const t = simple_statistics.tTest(sample, expectedValue);
        // Expected t‑value (rounded to two decimals) is 0.16
        const expected = 0.16;
        // Allow a tiny tolerance for floating‑point arithmetic
        assert.ok(Math.abs(t - expected) < 1e-6);
        done();
    });
});