let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.relativeError', function(done) {
        // Both actual and expected are zero → error should be 0
        assert.strictEqual(simple_statistics.relativeError(0, 0), 0);

        // Expected is zero, actual is non‑zero → error should be Infinity
        assert.strictEqual(simple_statistics.relativeError(5, 0), Infinity);
        assert.strictEqual(simple_statistics.relativeError(-3, 0), Infinity);

        // Normal cases using |(A‑E)/E|
        assert.strictEqual(simple_statistics.relativeError(0, 5), 1);          // |(0‑5)/5| = 1
        assert.strictEqual(simple_statistics.relativeError(10, 5), 1);         // |(10‑5)/5| = 1
        assert.strictEqual(simple_statistics.relativeError(-10, 5), 3);        // |(-10‑5)/5| = 3
        assert.strictEqual(simple_statistics.relativeError(5, -5), 2);         // |(5‑(-5))/(-5)| = 2
        assert.strictEqual(simple_statistics.relativeError(-5, -5), 0);        // identical non‑zero values

        done();
    });
});