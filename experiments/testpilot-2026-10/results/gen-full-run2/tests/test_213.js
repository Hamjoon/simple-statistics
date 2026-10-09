let mocha = require('mocha');
let assert = require('assert');
let ss = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.kde', function (done) {
        // Sample data
        const X = [1, 2, 3, 4, 5];
        const n = X.length;

        // ---------- Default kernel (gaussian) & default bandwidth (nrd) ----------
        const kdeDefault = ss.kde(X);
        // The default bandwidth is exposed on the returned function
        const bwDefault = kdeDefault.bandwidth;

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
        const kdeEpanechnikov = ss.kde(X, 'epanechnikov');
        const epanechnikov = ss.kernels.epanechnikov;

        const expectedEpanechnikov = (x) => {
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += epanechnikov((x - X[i]) / bwDefault);
            }
            return sum / bwDefault / n;
        };
        assert.ok(
            Math.abs(kdeEpanechnikov(2.5) - expectedEpanechnikov(2.5)) < 1e-12,
            'epanechnikov kernel mismatch'
        );

        // ---------- Custom kernel function ----------
        const uniformKernel = (u) => (Math.abs(u) <= 1 ? 0.5 : 0);
        const bwCustom = 2; // custom bandwidth
        const kdeUniform = ss.kde(X, uniformKernel, bwCustom);

        const expectedUniform = (x) => {
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += uniformKernel((x - X[i]) / bwCustom);
            }
            return sum / bwCustom / n;
        };
        assert.ok(
            Math.abs(kdeUniform(3) - expectedUniform(3)) < 1e-12,
            'custom uniform kernel mismatch'
        );

        // ---------- String bandwidth method ----------
        const kdeSilverman = ss.kde(X, 'gaussian', 'silverman');
        // The bandwidth used for the silverman method is also exposed
        const bwSilverman = kdeSilverman.bandwidth;

        const expectedSilverman = (x) => {
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += gaussian((x - X[i]) / bwSilverman);
            }
            return sum / bwSilverman / n;
        };
        assert.ok(
            Math.abs(kdeSilverman(4) - expectedSilverman(4)) < 1e-12,
            'silverman bandwidth mismatch'
        );

        // ---------- Error handling: unknown kernel ----------
        assert.throws(() => {
            ss.kde(X, 'nonexistentKernel');
        }, /Unknown kernel/);

        // ---------- Error handling: unknown bandwidth method ----------
        assert.throws(() => {
            ss.kde(X, 'gaussian', 'nonexistentMethod');
        }, /Unknown bandwidth method/);

        done();
    });
});