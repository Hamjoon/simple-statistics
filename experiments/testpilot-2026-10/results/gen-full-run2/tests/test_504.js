let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.sign', function(done) {
        // Positive number should return 1
        assert.strictEqual(simple_statistics.sign(2), 1);
        // Zero should return 0
        assert.strictEqual(simple_statistics.sign(0), 0);
        // Negative number should return -1
        assert.strictEqual(simple_statistics.sign(-7), -1);
        // Non‑number argument should throw a TypeError
        assert.throws(() => simple_statistics.sign('foo'), TypeError);
        // Ensure the test finishes
        done();
    });
});