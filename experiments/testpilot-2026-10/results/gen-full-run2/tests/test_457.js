let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCovariance', function(done) {
        // Simple positive correlation case
        const x = [1, 2, 3];
        const y = [4, 5, 6];
        const cov = simple_statistics.sampleCovariance(x, y);
        // Expected covariance = 1 (see calculation in analysis)
        assert.strictEqual(cov, 1);

        // Additional case with a larger dataset
        const x2 = [2, 4, 6, 8];
        const y2 = [1, 3, 5, 7];
        const cov2 = simple_statistics.sampleCovariance(x2, y2);
        // Expected covariance = 20/3 ≈ 6.666666666666667
        const expected = 20 / 3;
        assert.ok(Math.abs(cov2 - expected) < 1e-12);

        done();
    });
});