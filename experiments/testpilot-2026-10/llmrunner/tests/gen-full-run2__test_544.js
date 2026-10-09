let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sumSimple', function(done) {
        // Empty array should return 0
        assert.strictEqual(simple_statistics.sumSimple([]), 0);

        // Basic positive integers
        assert.strictEqual(simple_statistics.sumSimple([1, 2, 3]), 6);

        // Negative numbers
        assert.strictEqual(simple_statistics.sumSimple([-1, -2, -3]), -6);

        // Mixed positive and negative numbers
        assert.strictEqual(simple_statistics.sumSimple([5, -2, 7, -3]), 7);

        // Floating point numbers (allowing for floating point precision)
        const result = simple_statistics.sumSimple([0.1, 0.2, 0.3]);
        assert.ok(Math.abs(result - 0.6) < 1e-12, `Expected 0.6, got ${result}`);

        done();
    });
});