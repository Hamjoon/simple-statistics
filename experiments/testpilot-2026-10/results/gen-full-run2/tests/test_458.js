let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCovariance', function(done) {
        // Correct calculation
        const x = [1, 2, 3];
        const y = [2, 3, 4];
        const cov = simple_statistics.sampleCovariance(x, y);
        assert.strictEqual(cov, 1, 'Covariance of perfectly linearly related data should be 1');

        // Mismatched lengths should throw
        assert.throws(() => {
            simple_statistics.sampleCovariance([1, 2, 3], [4, 5]);
        }, /sampleCovariance requires samples with equal lengths/);

        // Insufficient data points should throw
        assert.throws(() => {
            simple_statistics.sampleCovariance([1], [2]);
        }, /sampleCovariance requires at least two data points/);

        done();
    });
});