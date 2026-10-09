let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCovariance', function(done) {
        // Correct calculation
        const x1 = [1, 2, 3, 4, 5, 6];
        const y1 = [6, 5, 4, 3, 2, 1];
        const cov1 = simple_statistics.sampleCovariance(x1, y1);
        assert.strictEqual(cov1, -3.5, 'Covariance of mirrored sequences should be -3.5');

        // Another simple case
        const x2 = [2, 4, 6];
        const y2 = [1, 3, 5];
        // Means: x̄=4, ȳ=3; sum((xi-4)*(yi-3)) = ( -2 * -2 ) + (0*0) + (2*2) = 8
        // Bessel correction: n-1 = 2 => 8/2 = 4
        const cov2 = simple_statistics.sampleCovariance(x2, y2);
        assert.strictEqual(cov2, 4, 'Covariance of linearly related data should be 4');

        // Error when lengths differ
        assert.throws(() => {
            simple_statistics.sampleCovariance([1, 2, 3], [4, 5]);
        }, /sampleCovariance requires samples with equal lengths/);

        // Error when length is less than 2
        assert.throws(() => {
            simple_statistics.sampleCovariance([1], [2]);
        }, /sampleCovariance requires at least two data points/);

        done();
    });
});