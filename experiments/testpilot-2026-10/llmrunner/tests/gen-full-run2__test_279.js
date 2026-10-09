let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.mad', function(done) {
        // Example from the documentation
        const data = [1, 1, 2, 2, 4, 6, 9];
        const madResult = simple_statistics.mad(data);
        assert.strictEqual(madResult, 1);

        // Edge case: a single‑element array should have MAD = 0
        assert.strictEqual(simple_statistics.mad([5]), 0);

        done();
    });
});