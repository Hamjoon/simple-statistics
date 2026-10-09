let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Prepare test data
        const data = [[0, 0], [1, 1]];
        // Perform linear regression
        const regression = simple_statistics.linearRegression(data);
        // Verify slope (m) and intercept (b)
        assert.strictEqual(regression.m, 1);
        assert.strictEqual(regression.b, 0);
        // Verify the generated line function works as expected
        const line = simple_statistics.linearRegressionLine(regression);
        assert.strictEqual(line(0), 0);
        assert.strictEqual(line(2), 2);
        done();
    });
});