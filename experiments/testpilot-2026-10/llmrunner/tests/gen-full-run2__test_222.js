let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Basic case: y = x
        const data1 = [[0, 0], [1, 1]];
        const result1 = simple_statistics.linearRegression(data1);
        assert.strictEqual(result1.m, 1);
        assert.strictEqual(result1.b, 0);

        // Verify the line function works as expected
        const line1 = simple_statistics.linearRegressionLine(result1);
        assert.strictEqual(line1(0), 0);
        assert.strictEqual(line1(2), 2);

        // Another case: y = 2x + 2
        const data2 = [[0, 2], [2, 6]];
        const result2 = simple_statistics.linearRegression(data2);
        assert.strictEqual(result2.m, 2);
        assert.strictEqual(result2.b, 2);

        const line2 = simple_statistics.linearRegressionLine(result2);
        assert.strictEqual(line2(0), 2);
        assert.strictEqual(line2(3), 8);

        done();
    });
});