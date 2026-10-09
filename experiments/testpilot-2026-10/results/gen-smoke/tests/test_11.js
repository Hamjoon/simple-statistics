let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Basic diagonal line (y = x)
        const data1 = [[0, 0], [1, 1], [2, 2]];
        const lr1 = simple_statistics.linearRegression(data1);
        assert.strictEqual(lr1.m, 1);
        assert.strictEqual(lr1.b, 0);

        // Verify the line function works as expected
        const line1 = simple_statistics.linearRegressionLine(lr1);
        assert.strictEqual(line1(0), 0);
        assert.strictEqual(line1(5), 5);

        // Line with non‑zero intercept (y = 2x + 2)
        const data2 = [[0, 2], [2, 6]];
        const lr2 = simple_statistics.linearRegression(data2);
        assert.strictEqual(lr2.m, 2);
        assert.strictEqual(lr2.b, 2);

        const line2 = simple_statistics.linearRegressionLine(lr2);
        assert.strictEqual(line2(3), 8); // 2*3 + 2 = 8

        done();
    });
});