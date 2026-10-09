let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sign', function(done) {
        // Positive, zero, and negative cases
        assert.strictEqual(simple_statistics.sign(-10), -1);
        assert.strictEqual(simple_statistics.sign(0), 0);
        assert.strictEqual(simple_statistics.sign(42), 1);
        // Non-number inputs should throw TypeError
        assert.throws(() => simple_statistics.sign('string'), TypeError);
        assert.throws(() => simple_statistics.sign(null), TypeError);
        assert.throws(() => simple_statistics.sign(undefined), TypeError);
        assert.throws(() => simple_statistics.sign({}), TypeError);
        done();
    });
});