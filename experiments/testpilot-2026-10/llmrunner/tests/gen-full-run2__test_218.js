let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Test with two points – should produce slope 1, intercept 0
        let data1 = [[0, 0], [1, 1]];
        let result1 = simple_statistics.linearRegression(data1);
        assert.strictEqual(result1.m, 1);
        assert.strictEqual(result1.b, 0);

        // Test with a single point – slope 0, intercept equals y of the point
        let data2 = [[5, 10]];
        let result2 = simple_statistics.linearRegression(data2);
        assert.strictEqual(result2.m, 0);
        assert.strictEqual(result2.b, 10);

        // Test with three points – compare against manually calculated values
        // Points: (1,2), (2,3), (3,5)
        // Expected slope m = 1.5, intercept b = 1/3 ≈ 0.333333...
        let data3 = [[1, 2], [2, 3], [3, 5]];
        let result3 = simple_statistics.linearRegression(data3);
        const EPS = 1e-12;
        assert.ok(Math.abs(result3.m - 1.5) < EPS, `Expected slope ~1.5, got ${result3.m}`);
        assert.ok(Math.abs(result3.b - (1/3)) < EPS, `Expected intercept ~0.333..., got ${result3.b}`);

        done();
    });
});