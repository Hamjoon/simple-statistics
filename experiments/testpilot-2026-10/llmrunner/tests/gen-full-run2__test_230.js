let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegressionLine', function(done) {
        // Direct mb object tests
        const f1 = simple_statistics.linearRegressionLine({ m: 1, b: 0 });
        assert.strictEqual(f1(0), 0);
        assert.strictEqual(f1(1), 1);
        assert.strictEqual(f1(5), 5);

        const f2 = simple_statistics.linearRegressionLine({ m: 2, b: 3 });
        assert.strictEqual(f2(0), 3);
        assert.strictEqual(f2(2), 7);
        assert.strictEqual(f2(-1), 1);

        // Using linearRegression to generate mb
        const data = [[0, 0], [1, 1], [2, 2]];
        const mb = simple_statistics.linearRegression(data);
        // Expected slope 1, intercept 0
        assert.strictEqual(mb.m, 1);
        assert.strictEqual(mb.b, 0);

        const line = simple_statistics.linearRegressionLine(mb);
        assert.strictEqual(line(0), 0);
        assert.strictEqual(line(2), 2);
        assert.strictEqual(line(10), 10);

        done();
    });
});