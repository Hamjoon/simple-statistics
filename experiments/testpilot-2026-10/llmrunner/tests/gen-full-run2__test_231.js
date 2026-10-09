let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegressionLine', function(done) {
        // First simple case: points (0,0) and (1,1) => y = x
        const data1 = [[0, 0], [1, 1]];
        const lr1 = simple_statistics.linearRegression(data1);
        const line1 = simple_statistics.linearRegressionLine(lr1);
        assert.strictEqual(line1(0), 0);
        assert.strictEqual(line1(1), 1);
        assert.strictEqual(line1(2), 2);

        // Second case: points (0,2) and (2,6) => y = 2x + 2
        const data2 = [[0, 2], [2, 6]];
        const lr2 = simple_statistics.linearRegression(data2);
        const line2 = simple_statistics.linearRegressionLine(lr2);
        assert.strictEqual(line2(0), 2);
        assert.strictEqual(line2(1), 4);
        assert.strictEqual(line2(2), 6);

        done();
    });
});