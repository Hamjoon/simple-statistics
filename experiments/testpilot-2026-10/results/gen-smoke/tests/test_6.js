let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Test case 1: multiple points with a clear linear relationship
        const data1 = [
            [0, 1],
            [1, 3],
            [2, 5],
            [3, 7]
        ]; // y = 2x + 1
        const result1 = simple_statistics.linearRegression(data1);
        // Use a tolerance for floating point arithmetic
        const tolerance = 1e-12;
        assert.ok(Math.abs(result1.m - 2) < tolerance, `Expected slope ~2, got ${result1.m}`);
        assert.ok(Math.abs(result1.b - 1) < tolerance, `Expected intercept ~1, got ${result1.b}`);

        // Test case 2: single point (edge case)
        const data2 = [[2, 7]];
        const result2 = simple_statistics.linearRegression(data2);
        assert.strictEqual(result2.m, 0, 'Slope should be 0 for a single point');
        assert.strictEqual(result2.b, 7, 'Intercept should equal the y value of the single point');

        done();
    });
});