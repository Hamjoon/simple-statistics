let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combineMeans', function(done) {
        // Simple integer case
        let result1 = simple_statistics.combineMeans(10, 2, 20, 2);
        assert.strictEqual(result1, 15);

        // Mixed case with a fractional expected result
        let result2 = simple_statistics.combineMeans(5, 2, 7, 3);
        assert.ok(Math.abs(result2 - 6.2) < 1e-12);

        // Edge case where the first sample size is zero
        let result3 = simple_statistics.combineMeans(0, 0, 8, 5);
        assert.strictEqual(result3, 8);

        done();
    });
});