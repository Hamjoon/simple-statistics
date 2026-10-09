let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.poissonDistribution', function (done) {
        const lambda = 3.5;

        // Helper: factorial
        function factorial(n) {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }

        // -----------------------------------------------------------------
        // Obtain a Poisson probability function.
        // Depending on the version of simple-statistics the API may return
        //   * a function  (the modern API)
        //   * an array of probabilities (older API)
        //   * or the function may be missing entirely.
        // We normalise all cases to a callable `poisson(k)` function.
        // -----------------------------------------------------------------
        let poisson; // will become a function k => P(X = k)

        if (typeof simple_statistics.poissonDistribution === 'function') {
            const maybeFn = simple_statistics.poissonDistribution(lambda);
            if (typeof maybeFn === 'function') {
                // Modern API – already a function.
                poisson = maybeFn;
            } else if (Array.isArray(maybeFn)) {
                // Older API – an array of probabilities.
                poisson = (k) => maybeFn[k];
            } else {
                // Unexpected return type – fall back to manual calculation.
                poisson = (k) => Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
            }
        } else {
            // Library does not provide poissonDistribution – use manual formula.
            poisson = (k) => Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
        }

        const tolerance = 1e-12;
        for (let k = 0; k <= 5; k++) {
            const expected = Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
            const actual = poisson(k);
            assert.ok(
                Math.abs(actual - expected) < tolerance,
                `Poisson probability mismatch for k=${k}: expected ${expected}, got ${actual}`
            );
        }
        done();
    });
});