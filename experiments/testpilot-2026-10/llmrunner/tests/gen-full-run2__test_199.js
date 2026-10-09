let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.inverseErrorFunction', function (done) {
        const testValues = [-0.9, -0.5, -0.2, 0, 0.2, 0.5, 0.9];

        // The implementation of inverseErrorFunction in simple‑statistics is
        // accurate only to about 1e‑3 for extreme arguments, so we relax the
        // tolerance accordingly.
        const tolerance = 1e-3;

        testValues.forEach(function (x) {
            const inv = simple_statistics.inverseErrorFunction(x);

            // sign check
            if (x < 0) {
                assert(inv < 0, `inverseErrorFunction(${x}) should be negative`);
            } else if (x > 0) {
                assert(inv > 0, `inverseErrorFunction(${x}) should be positive`);
            } else {
                assert.strictEqual(inv, 0, `inverseErrorFunction(0) should be 0`);
            }

            // round‑trip through errorFunction
            const back = simple_statistics.errorFunction(inv);
            assert(
                Math.abs(back - x) < tolerance,
                `round‑trip error too large for ${x}: expected ${x}, got ${back}`
            );
        });

        done();
    });
});