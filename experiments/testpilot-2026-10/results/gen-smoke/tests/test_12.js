let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Prepare a simple dataset that lies perfectly on y = x
        const data = [[0, 0], [1, 1], [2, 2]];
        // Perform linear regression
        const result = simple_statistics.linearRegression(data);
        // The slope (m) should be 1 and the intercept (b) should be 0
        assert.strictEqual(result.m, 1);
        assert.strictEqual(result.b, 0);
        // Verify that the generated line function works as expected
        const line = simple_statistics.linearRegressionLine(result);
        assert.strictEqual(line(5), 5);   // y = 5 when x = 5
        assert.strictEqual(line(-3), -3); // y = -3 when x = -3
        done();
    });
});