let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.interquartileRange', function(done) {
        // Basic even-sized array
        assert.strictEqual(simple_statistics.interquartileRange([0, 1, 2, 3]), 1.5);
        // Odd-sized array
        assert.strictEqual(simple_statistics.interquartileRange([1, 2, 3, 4, 5]), 2);
        done();
    });
});