let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.kde', function(done) {
        // Sample data
        const X = [1, 2, 3, 4, 5];
        const n = X.length;

        // ---------- Default kernel (gaussian) & default bandwidth (nrd) ----------
        const kdeDefault = simple_statistics.kde(X);
        const bwDefault = simple_statistics.bandwidthMethods.nrd(X);
        // Gaussian kernel implementation (same as simple-statistics.kernels.gaussian)
        const gaussian = (u) => (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * u * u);
        const expectedDefault = (x) => {
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += gaussian((x - X[i]) / bwDefault);
            }
            return sum / bwDefault / n;
        };
        // Test a few points
        [0, 2.5, 6].forEach((pt) => {
            const val = kdeDefault(pt);
            const exp = expectedDefault(pt);
            assert.ok(Math.abs(val - exp) < 1e-12, `default kde mismatch at ${pt}`);
        });

        // ---------- String kernel name ----------
        const kdeEpanechnikov = simple_statistics.kde(X, 'epanechnikov');
        const epanechnikov = simple_statistics.kernels.epanechnikov;
        const expectedEpanechnikov = (x) => {
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += epanechnikov((x - X[i]) / bwDefault);
            }
            return sum / bwDefault / n;
        };
        assert.ok(Math.abs(kdeEpanechnikov(2.5) - expectedEpanechnikov(2.5)) < 1e-12);

        // ---------- Custom kernel function ----------
        const uniformKernel = (u) => (Math.abs(u) <= 1 ? 0.5 : 0);
        const kdeUniform = simple_statistics.kde(X, uniformKernel, 2); // custom bandwidth = 2
        const bwCustom = 2;
        const expectedUniform = (x) => {
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += uniformKernel((x - X[i]) / bwCustom);
            }
            return sum / bwCustom / n;
        };
        assert.ok(Math.abs(kdeUniform(3) - expectedUniform(3)) < 1e-12);

        // ---------- String bandwidth method ----------
        const kdeSilverman = simple_statistics.kde(X, 'gaussian', 'silverman');
        const bwSilverman = simple_statistics.bandwidthMethods.silverman(X);
        const expectedSilverman = (x) => {
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += gaussian((x - X[i]) / bwSilverman);
            }
            return sum / bwSilverman / n;
        };
        assert.ok(Math.abs(kdeSilverman(4) - expectedSilverman(4)) < 1e-12);

        // ---------- Error handling: unknown kernel ----------
        assert.throws(() => {
            simple_statistics.kde(X, 'nonexistentKernel');
        }, /Unknown kernel/);

        // ---------- Error handling: unknown bandwidth method ----------
        assert.throws(() => {
            simple_statistics.kde(X, 'gaussian', 'nonexistentMethod');
        }, /Unknown bandwidth method/);

        done();
    });
});