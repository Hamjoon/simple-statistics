let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegressionLine', function(done) {
        // Prepare a known slope (m) and intercept (b)
        const mb = { b: 2, m: 3 };
        // Get the regression line function
        const lineFn = simple_statistics.linearRegressionLine(mb);
        // Verify that the returned value is a function
        assert.strictEqual(typeof lineFn, 'function');
        // Test a few points
        assert.strictEqual(lineFn(0), 2);          // y = 2 + 3*0 = 2
        assert.strictEqual(lineFn(1), 5);          // y = 2 + 3*1 = 5
        assert.strictEqual(lineFn(-1), -1);        // y = 2 + 3*(-1) = -1
        // Test with a non‑integer x
        const x = 2.5;
        const expected = mb.b + mb.m * x;          // 2 + 3*2.5 = 9.5
        assert.strictEqual(lineFn(x), expected);
        done();
    });
});