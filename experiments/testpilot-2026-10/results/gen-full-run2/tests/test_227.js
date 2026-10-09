let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegressionLine', function(done) {
        // Basic regression on a perfect line y = x
        const points = [[0, 0], [1, 1], [2, 2]];
        const mb = simple_statistics.linearRegression(points);
        const line = simple_statistics.linearRegressionLine(mb);

        // Verify that the generated line matches the original points
        assert.strictEqual(line(0), 0);
        assert.strictEqual(line(1), 1);
        assert.strictEqual(line(2), 2);

        // Verify that the function works with a manually supplied mb object
        const customLine = simple_statistics.linearRegressionLine({ b: 1, m: 2 });
        assert.strictEqual(customLine(0), 1);          // y = 1 + 2*0
        assert.strictEqual(customLine(3), 7);          // y = 1 + 2*3

        done();
    });
});