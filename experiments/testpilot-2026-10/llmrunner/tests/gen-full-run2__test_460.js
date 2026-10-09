let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCovariance', function(done) {
        // Correct calculation (example from the docs)
        const cov = simple_statistics.sampleCovariance(
            [1, 2, 3, 4, 5, 6],
            [6, 5, 4, 3, 2, 1]
        );
        assert.strictEqual(cov, -3.5);

        // Error when arrays have different lengths
        assert.throws(() => {
            simple_statistics.sampleCovariance([1, 2, 3], [4, 5]);
        }, /Error/);

        // Error when either array has length <= 1
        assert.throws(() => {
            simple_statistics.sampleCovariance([1], [2]);
        }, /Error/);

        done();
    });
});