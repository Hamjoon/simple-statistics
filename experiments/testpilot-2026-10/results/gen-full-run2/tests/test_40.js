let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.approxEqual', function(done) {
        // Exact equality should always be true
        assert.strictEqual(simple_statistics.approxEqual(42, 42), true);

        // With the default tolerance, clearly different numbers should be false
        assert.strictEqual(simple_statistics.approxEqual(1, 2), false);

        // Custom tolerance: numbers within 10% relative error should be true
        const tol = 0.10; // 10%
        assert.strictEqual(simple_statistics.approxEqual(100, 108, tol), true);   // 8% error
        assert.strictEqual(simple_statistics.approxEqual(100, 115, tol), false);  // 15% error

        // Custom tolerance: very tight tolerance should reject small differences
        const tightTol = 1e-9;
        assert.strictEqual(simple_statistics.approxEqual(0.123456789, 0.123456788, tightTol), false);
        // But a larger tolerance should accept the same difference
        const looseTol = 1e-6;
        assert.strictEqual(simple_statistics.approxEqual(0.123456789, 0.123456788, looseTol), true);

        done();
    });
});