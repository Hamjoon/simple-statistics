let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegressionLine', function(done) {
        // Use linearRegression to get slope (m) and intercept (b)
        const data = [[0, 0], [1, 1], [2, 2]];
        const mb = simple_statistics.linearRegression(data);
        const line = simple_statistics.linearRegressionLine(mb);

        // Verify the generated line function matches the original data
        assert.strictEqual(line(0), 0);
        assert.strictEqual(line(1), 1);
        assert.strictEqual(line(2), 2);

        // Directly test with explicit {b, m} objects
        const lineZero = simple_statistics.linearRegressionLine({ b: 0, m: 1 });
        assert.strictEqual(lineZero(1), 1);

        const lineOne = simple_statistics.linearRegressionLine({ b: 1, m: 1 });
        assert.strictEqual(lineOne(1), 2);

        done();
    });
});