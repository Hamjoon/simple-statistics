let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegressionLine', function(done) {
        // Known regression parameters
        const mb = { m: 2, b: 3 };
        // Get the regression line function
        const line = simple_statistics.linearRegressionLine(mb);
        // Verify that the returned function computes y = m*x + b correctly
        assert.strictEqual(line(0), 3);   // 2*0 + 3 = 3
        assert.strictEqual(line(5), 13);  // 2*5 + 3 = 13
        assert.strictEqual(line(-1), 1);  // 2*(-1) + 3 = 1
        assert.strictEqual(line(2.5), 8); // 2*2.5 + 3 = 8
        done();
    });
});