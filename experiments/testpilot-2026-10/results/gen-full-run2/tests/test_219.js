let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // 1. Single data point – slope 0, intercept equals the y‑value
        const single = simple_statistics.linearRegression([[5, 10]]);
        assert.strictEqual(single.m, 0);
        assert.strictEqual(single.b, 10);

        // 2. Two points forming the line y = x
        const two = simple_statistics.linearRegression([[0, 0], [1, 1]]);
        assert.strictEqual(two.m, 1);
        assert.strictEqual(two.b, 0);

        // 3. Multiple points that lie on the line y = 2x + 2
        const many = simple_statistics.linearRegression([[0, 2], [2, 6], [4, 10]]);
        assert.strictEqual(many.m, 2);
        // floating‑point arithmetic may produce a tiny rounding error
        assert.ok(Math.abs(many.b - 2) < 1e-12);

        done();
    });
});