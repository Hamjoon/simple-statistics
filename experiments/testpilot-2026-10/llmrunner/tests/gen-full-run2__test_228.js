let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegressionLine', function(done) {
        // Test with a perfect y = x line
        const data1 = [[0, 0], [1, 1], [2, 2]];
        const mb1 = simple_statistics.linearRegression(data1);
        const line1 = simple_statistics.linearRegressionLine(mb1);
        assert.strictEqual(line1(0), 0);
        assert.strictEqual(line1(5), 5);

        // Test with a line y = 2x + 2
        const data2 = [[0, 2], [2, 6]];
        const mb2 = simple_statistics.linearRegression(data2);
        const line2 = simple_statistics.linearRegressionLine(mb2);
        // Use a tolerance for floating‑point arithmetic
        assert.ok(Math.abs(line2(3) - 8) < 1e-12);

        done();
    });
});