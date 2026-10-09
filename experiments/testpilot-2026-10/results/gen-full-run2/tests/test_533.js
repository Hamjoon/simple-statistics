let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sum', function(done) {
        // Empty array should return 0
        assert.strictEqual(simple_statistics.sum([]), 0);

        // Simple integer sum
        assert.strictEqual(simple_statistics.sum([1, 2, 3]), 6);

        // Sum with negative numbers
        assert.strictEqual(simple_statistics.sum([-1, -2, 3]), 0);

        // Floating‑point numbers (checking for proper error correction)
        const fpArray = [0.1, 0.2, 0.3];
        const fpExpected = 0.6;
        const fpResult = simple_statistics.sum(fpArray);
        assert.ok(Math.abs(fpResult - fpExpected) < 1e-12, `Expected ${fpExpected}, got ${fpResult}`);

        // Non‑numeric element should produce NaN
        assert.ok(Number.isNaN(simple_statistics.sum([1, 'a', 3])));

        // Large numbers (beyond typical integer precision)
        const largeArray = [Number.MAX_SAFE_INTEGER, 1];
        assert.strictEqual(simple_statistics.sum(largeArray), Number.MAX_SAFE_INTEGER + 1);

        done();
    });
});