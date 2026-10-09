let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Basic two‑point case: y = x
        let result = simple_statistics.linearRegression([[0, 0], [1, 1]]);
        assert.strictEqual(result.m, 1);
        assert.strictEqual(result.b, 0);

        // Single‑point case: slope 0, intercept = y of the point
        let single = simple_statistics.linearRegression([[5, 10]]);
        assert.strictEqual(single.m, 0);
        assert.strictEqual(single.b, 10);

        // Another set of points where the line should be y = x + 1
        let result2 = simple_statistics.linearRegression([[0, 1], [2, 3]]);
        assert.ok(Math.abs(result2.m - 1) < 1e-12);
        assert.ok(Math.abs(result2.b - 1) < 1e-12);

        done();
    });
});