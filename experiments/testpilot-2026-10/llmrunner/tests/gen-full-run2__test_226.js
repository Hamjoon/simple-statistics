let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegressionLine', function(done) {
        // Direct usage with explicit slope and intercept
        const line1 = simple_statistics.linearRegressionLine({ b: 0, m: 1 });
        assert.strictEqual(line1(0), 0);
        assert.strictEqual(line1(2), 2);

        const line2 = simple_statistics.linearRegressionLine({ b: 1, m: 1 });
        assert.strictEqual(line2(1), 2);

        // Use the result of linearRegression to create a line function
        const data = [[0, 0], [1, 1], [2, 2]];
        const mb = simple_statistics.linearRegression(data);
        const line3 = simple_statistics.linearRegressionLine(mb);

        // Verify that the regression produced the expected slope and intercept
        assert.ok(Math.abs(mb.m - 1) < 1e-12, 'slope should be ~1');
        assert.ok(Math.abs(mb.b - 0) < 1e-12, 'intercept should be ~0');

        // Verify the generated line function works as expected
        assert.strictEqual(line3(5), 5);

        done();
    });
});