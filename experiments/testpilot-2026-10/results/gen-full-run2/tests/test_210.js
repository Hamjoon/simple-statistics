let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.kde', function(done) {
        // Sample data set
        const data = [1, 2, 3, 4, 5];

        // Create a KDE function using the Gaussian kernel and the default bandwidth method
        const kde = simple_statistics.kde(data, 'gaussian', 'silverman');

        // The returned object should be a function
        assert.strictEqual(typeof kde, 'function');

        // Evaluate the density at a point within the data range
        const densityAt3 = kde(3);
        assert.ok(Number.isFinite(densityAt3), 'Density should be a finite number');
        assert.ok(densityAt3 > 0, 'Density at a central point should be positive');

        // Evaluate the density far away from the data – it should be effectively zero
        const densityFar = kde(100);
        assert.ok(Number.isFinite(densityFar), 'Density should be a finite number');
        assert.ok(densityFar < 1e-6, 'Density far from data should be near zero');

        done();
    });
});