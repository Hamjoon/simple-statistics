let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Simple dataset that lies exactly on the line y = 2x + 3
        const data = [
            [0, 3],
            [1, 5],
            [2, 7],
            [3, 9]
        ];

        // Perform linear regression
        const line = simple_statistics.linearRegression(data);

        // Verify slope (m) and intercept (b) are as expected
        assert.ok(Math.abs(line.m - 2) < 1e-12, `Expected slope 2, got ${line.m}`);
        assert.ok(Math.abs(line.b - 3) < 1e-12, `Expected intercept 3, got ${line.b}`);

        // Verify the prediction function produced by linearRegressionLine
        const predict = simple_statistics.linearRegressionLine(line);
        assert.strictEqual(predict(4), 11, 'Prediction for x=4 should be 11');

        done();
    });
});