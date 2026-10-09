let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.mad', function(done) {
        // Example from the documentation
        assert.strictEqual(simple_statistics.mad([1, 1, 2, 2, 4, 6, 9]), 1);
        // Additional sanity checks
        assert.strictEqual(simple_statistics.mad([1, 2, 3, 4, 5]), 1);
        assert.strictEqual(simple_statistics.mad([-2, -1, 0, 1, 2]), 1);
        done();
    });
});