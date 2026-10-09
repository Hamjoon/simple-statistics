let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Simple perfect line
        const data1 = [[0, 0], [1, 1], [2, 2]];
        const result1 = simple_statistics.linearRegression(data1);
        assert.strictEqual(result1.m, 1);
        assert.strictEqual(result1.b, 0);

        // A less trivial data set
        const data2 = [[0, 2], [2, 3], [4, 5]];
        const result2 = simple_statistics.linearRegression(data2);
        // Expected values calculated manually:
        // slope (m) = 0.75, intercept (b) ≈ 1.833333...
        const EPS = 1e-6;
        assert.ok(Math.abs(result2.m - 0.75) < EPS, `Expected slope ~0.75, got ${result2.m}`);
        assert.ok(Math.abs(result2.b - 1.8333333333333333) < EPS, `Expected intercept ~1.83333, got ${result2.b}`);

        done();
    });
});