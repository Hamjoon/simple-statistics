let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.relativeError', function(done) {
        const rel = simple_statistics.relativeError;

        // Both actual and expected are zero → 0
        assert.strictEqual(rel(0, 0), 0);

        // Expected is zero, actual is non‑zero → Infinity
        assert.strictEqual(rel(5, 0), Infinity);
        assert.strictEqual(rel(-3, 0), Infinity);

        // Normal case
        assert.strictEqual(rel(5, 10), 0.5);

        // Actual is zero, expected is non‑zero → 1
        assert.strictEqual(rel(0, 10), 1);

        // Negative values
        assert.strictEqual(rel(-5, 10), 1.5);
        assert.strictEqual(rel(5, -10), 1.5);

        done();
    });
});