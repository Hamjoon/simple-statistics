let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.kde', function(done) {
        // Sample data – a simple deterministic set
        const X = [0, 1, 2, 3, 4, 5];

        // Create the KDE function with default (gaussian) kernel and bandwidth method
        const kde = simple_statistics.kde(X);

        // The returned object should be a function
        assert.strictEqual(typeof kde, 'function');

        // The density should never be negative
        const testPoints = [-2, 0, 2.5, 5, 7];
        testPoints.forEach(p => {
            const v = kde(p);
            assert.ok(v >= 0, `density at ${p} is negative`);
        });

        // Approximate the integral of the density over a wide range.
        // For a proper probability density function the integral should be ~1.
        const start = -10;
        const end = 15;
        const step = 0.05; // fine enough for a quick approximation
        let integral = 0;
        for (let x = start; x <= end; x += step) {
            integral += kde(x) * step;
        }

        // Allow a modest tolerance because of the approximation and default bandwidth.
        const tolerance = 0.1;
        assert.ok(Math.abs(integral - 1) < tolerance,
            `integral ≈ ${integral.toFixed(3)} differs from 1 by more than ${tolerance}`);

        done();
    });
});