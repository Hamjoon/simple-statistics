let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.zScore', function(done) {
        // Typical positive case
        const zPos = simple_statistics.zScore(5, 3, 2);
        assert.strictEqual(zPos, 1);

        // Typical negative case
        const zNeg = simple_statistics.zScore(1, 3, 2);
        assert.strictEqual(zNeg, -1);

        // Zero standard deviation should produce NaN
        const zZero = simple_statistics.zScore(3, 3, 0);
        assert.ok(Number.isNaN(zZero));

        done();
    });
});