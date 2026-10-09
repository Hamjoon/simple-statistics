let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sum', function(done) {
        // Empty array should return 0
        assert.strictEqual(simple_statistics.sum([]), 0);

        // Simple integer sum
        assert.strictEqual(simple_statistics.sum([1, 2, 3]), 6);

        // Floating‑point sum – check within a tight tolerance
        const fpResult = simple_statistics.sum([0.1, 0.2, 0.3]);
        assert.ok(Math.abs(fpResult - 0.6) < 1e-12, `Expected ~0.6, got ${fpResult}`);

        // Non‑numeric element should produce NaN
        const nanResult = simple_statistics.sum([1, 'a', 3]);
        assert.ok(Number.isNaN(nanResult), `Expected NaN, got ${nanResult}`);

        done();
    });
});