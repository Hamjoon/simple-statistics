let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.product', function(done) {
        // basic multiplication
        assert.strictEqual(simple_statistics.product([1, 2, 3, 4]), 24);
        // empty array should return the multiplicative identity (1)
        assert.strictEqual(simple_statistics.product([]), 1);
        // presence of zero should zero out the product
        assert.strictEqual(simple_statistics.product([0, 5, 10]), 0);
        // handling of negative numbers
        assert.strictEqual(simple_statistics.product([-2, 3]), -6);
        done();
    });
});