let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.product', function(done) {
        // Basic multiplication
        assert.strictEqual(simple_statistics.product([1, 2, 3, 4]), 24);
        // Single element array
        assert.strictEqual(simple_statistics.product([5]), 5);
        // Empty array should return the initial value (1)
        assert.strictEqual(simple_statistics.product([]), 1);
        // Contains zero
        assert.strictEqual(simple_statistics.product([0, 1, 2]), 0);
        // Negative numbers
        assert.strictEqual(simple_statistics.product([-1, 2, -3]), 6);
        // Floating point numbers
        assert.strictEqual(simple_statistics.product([1.5, 2]), 3);
        done();
    });
});