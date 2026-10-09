let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.mad', function(done) {
        // Odd number of elements
        assert.strictEqual(simple_statistics.mad([1, 2, 3, 4, 5]), 1);
        // Even number of elements
        assert.strictEqual(simple_statistics.mad([1, 2, 3, 4]), 1);
        // Including negative numbers
        assert.strictEqual(simple_statistics.mad([-2, -1, 0, 1, 2]), 2);
        done();
    });
});