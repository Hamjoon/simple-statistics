let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.zScore', function(done) {
        // Basic known values
        assert.strictEqual(simple_statistics.zScore(78, 80, 5), -0.4);
        assert.strictEqual(simple_statistics.zScore(100, 100, 10), 0);
        assert.strictEqual(simple_statistics.zScore(120, 100, 20), 1);
        // Negative standard deviation (mathematically unusual but allowed by the function)
        assert.strictEqual(simple_statistics.zScore(80, 100, -10), 2);
        // Division by zero cases
        assert.ok(Number.isNaN(simple_statistics.zScore(5, 5, 0)), '0/0 should be NaN');
        assert.strictEqual(simple_statistics.zScore(10, 5, 0), Infinity, 'positive numerator with zero std dev should be Infinity');
        assert.strictEqual(simple_statistics.zScore(-10, 5, 0), -Infinity, 'negative numerator with zero std dev should be -Infinity');
        done();
    });
});