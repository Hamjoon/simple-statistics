let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.sign', function () {
        // Positive number should return 1
        assert.strictEqual(simple_statistics.sign(2), 1);
        // Negative number should return -1
        assert.strictEqual(simple_statistics.sign(-5), -1);
        // Zero should return 0
        assert.strictEqual(simple_statistics.sign(0), 0);
        // Non‑numeric input should return NaN (simple-statistics returns NaN, not throw)
        assert.ok(Number.isNaN(simple_statistics.sign('a')));
        // NaN input should also return NaN
        assert.ok(Number.isNaN(simple_statistics.sign(NaN)));
    });
});