let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // basic two‑point line y = x
        const line1 = simple_statistics.linearRegression([[0, 0], [1, 1]]);
        assert.strictEqual(line1.m, 1);
        assert.strictEqual(line1.b, 0);

        // single‑point edge case: slope 0, intercept = y of the point
        const line2 = simple_statistics.linearRegression([[2, 3]]);
        assert.strictEqual(line2.m, 0);
        assert.strictEqual(line2.b, 3);

        // three points with a known regression line (slope 1.5, intercept 1/3)
        const data = [[1, 2], [2, 3], [3, 5]];
        const line3 = simple_statistics.linearRegression(data);
        const epsilon = 1e-12;
        assert.ok(Math.abs(line3.m - 1.5) < epsilon, `expected slope ≈ 1.5, got ${line3.m}`);
        assert.ok(Math.abs(line3.b - (1 / 3)) < epsilon, `expected intercept ≈ 0.333..., got ${line3.b}`);

        done();
    });
});