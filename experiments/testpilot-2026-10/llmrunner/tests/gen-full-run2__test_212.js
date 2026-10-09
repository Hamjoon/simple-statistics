let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.kde', function(done) {
        // 1. Default kernel & bandwidth – should return a function that yields a positive density
        const X = [0, 1, 2];
        const kdeDefault = simple_statistics.kde(X);
        const defaultVal = kdeDefault(1);
        assert.strictEqual(typeof kdeDefault, 'function', 'kde should return a function');
        assert.ok(defaultVal > 0, 'density should be positive for default settings');

        // 2. Numeric bandwidth with the built‑in Gaussian kernel – compare against a manual calculation
        const X2 = [0, 1];
        const bandwidth = 0.5;
        const kdeGaussian = simple_statistics.kde(X2, 'gaussian', bandwidth);
        const result = kdeGaussian(0.5);

        const gaussian = (z) => (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * z * z);
        const manual = (gaussian((0.5 - 0) / bandwidth) + gaussian((0.5 - 1) / bandwidth)) /
                        (bandwidth * X2.length);
        assert.ok(Math.abs(result - manual) < 1e-12, 'numeric bandwidth result matches manual calculation');

        // 3. Custom kernel function – also compare against a manual calculation
        const uniformKernel = (z) => (Math.abs(z) <= 1 ? 0.5 : 0); // uniform kernel
        const kdeCustom = simple_statistics.kde(X2, uniformKernel, bandwidth);
        const resultCustom = kdeCustom(0.5);
        const manualCustom = (uniformKernel((0.5 - 0) / bandwidth) + uniformKernel((0.5 - 1) / bandwidth)) /
                             (bandwidth * X2.length);
        assert.ok(Math.abs(resultCustom - manualCustom) < 1e-12, 'custom kernel matches manual calculation');

        // 4. Unknown kernel string should throw an error
        assert.throws(() => simple_statistics.kde(X, 'unknownKernel'), /Unknown kernel/);

        // 5. Unknown bandwidth method string should throw an error
        assert.throws(() => simple_statistics.kde(X, 'gaussian', 'unknownMethod'), /Unknown bandwidth method/);

        done();
    });
});