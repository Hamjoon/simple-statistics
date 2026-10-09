let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Basic case: points on the line y = x
        const data1 = [[0, 0], [1, 1]];
        const result1 = simple_statistics.linearRegression(data1);
        assert.strictEqual(result1.m, 1, 'slope should be 1');
        assert.strictEqual(result1.b, 0, 'intercept should be 0');

        // Another case: points on the line y = 2x + 3
        const data2 = [[0, 3], [1, 5], [2, 7]];
        const result2 = simple_statistics.linearRegression(data2);
        // Use a tolerance for floating‑point arithmetic
        const tolerance = 1e-12;
        assert.ok(Math.abs(result2.m - 2) < tolerance, `slope should be close to 2 (got ${result2.m})`);
        assert.ok(Math.abs(result2.b - 3) < tolerance, `intercept should be close to 3 (got ${result2.b})`);

        done();
    });
});