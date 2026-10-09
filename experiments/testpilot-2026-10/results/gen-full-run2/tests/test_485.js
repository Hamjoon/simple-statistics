let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleVariance', function(done) {
        // Correct variance calculation
        const data = [1, 2, 3, 4, 5];
        const result = simple_statistics.sampleVariance(data);
        // Expected sample variance: 2.5
        assert.strictEqual(result, 2.5);

        // Should throw when fewer than two data points are provided
        assert.throws(
            () => simple_statistics.sampleVariance([42]),
            /sampleVariance requires at least two data points/
        );

        done();
    });
});