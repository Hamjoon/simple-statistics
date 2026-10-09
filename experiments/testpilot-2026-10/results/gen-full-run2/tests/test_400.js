let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.product', function(done) {
        // Empty array should return the multiplicative identity (1)
        assert.strictEqual(simple_statistics.product([]), 1);
        // Single element
        assert.strictEqual(simple_statistics.product([5]), 5);
        // Multiple positive integers
        assert.strictEqual(simple_statistics.product([2, 3, 4]), 24);
        // Contains zero
        assert.strictEqual(simple_statistics.product([0, 2, 3]), 0);
        // Negative numbers
        assert.strictEqual(simple_statistics.product([-2, 3]), -6);
        // Floating point numbers
        assert.strictEqual(simple_statistics.product([1.5, 2]), 3);
        done();
    });
});