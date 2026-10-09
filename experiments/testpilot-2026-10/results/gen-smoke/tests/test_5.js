let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Simple linear data: y = 2x + 0
        const data = [
            [0, 0],
            [1, 2],
            [2, 4],
            [3, 6]
        ];
        const result = simple_statistics.linearRegression(data);
        // result should have properties m (slope) and b (intercept)
        assert.ok(Math.abs(result.m - 2) < 1e-12, `Expected slope ~2, got ${result.m}`);
        assert.ok(Math.abs(result.b - 0) < 1e-12, `Expected intercept ~0, got ${result.b}`);
        done();
    });
});