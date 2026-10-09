let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Test case 1: multiple points with a known line y = 2x + 3
        const data1 = [
            [0, 3],
            [1, 5],
            [2, 7],
            [3, 9],
            [4, 11]
        ];
        const result1 = simple_statistics.linearRegression(data1);
        const expectedM1 = 2;
        const expectedB1 = 3;
        // Allow a tiny tolerance for floating‑point arithmetic
        const tolerance = 1e-12;
        assert.ok(Math.abs(result1.m - expectedM1) < tolerance, `Expected slope ${expectedM1}, got ${result1.m}`);
        assert.ok(Math.abs(result1.b - expectedB1) < tolerance, `Expected intercept ${expectedB1}, got ${result1.b}`);

        // Test case 2: single point – slope should be 0 and intercept the y value
        const data2 = [[7, -4]];
        const result2 = simple_statistics.linearRegression(data2);
        const expectedM2 = 0;
        const expectedB2 = -4;
        assert.strictEqual(result2.m, expectedM2, `Expected slope ${expectedM2} for single point`);
        assert.strictEqual(result2.b, expectedB2, `Expected intercept ${expectedB2} for single point`);

        done();
    });
});