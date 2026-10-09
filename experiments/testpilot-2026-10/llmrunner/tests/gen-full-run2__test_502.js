let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sign', function(done) {
        // Positive numbers should return 1
        assert.strictEqual(simple_statistics.sign(5), 1);
        assert.strictEqual(simple_statistics.sign(2.5), 1);
        // Negative numbers should return -1
        assert.strictEqual(simple_statistics.sign(-3), -1);
        assert.strictEqual(simple_statistics.sign(-0.1), -1);
        // Zero should return 0
        assert.strictEqual(simple_statistics.sign(0), 0);
        done();
    });
});