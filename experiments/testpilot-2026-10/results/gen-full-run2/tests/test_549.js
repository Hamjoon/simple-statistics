let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.tTest', function (done) {
        // Sample data and expected value
        const sample = [2, 4, 6, 8, 10];
        const expectedValue = 5;

        // Compute t‑statistic using the library
        const t = simple_statistics.tTest(sample, expectedValue);

        // The library uses the *population* standard deviation (divide by n),
        // so we calculate the expected t‑statistic accordingly:
        //   mean = 6
        //   population variance = Σ(x‑mean)² / n = 40 / 5 = 8
        //   population sd = √8 ≈ 2.8284271247461903
        //   rootN = √5 ≈ 2.23606797749979
        //   t = (6‑5) / (sd / rootN) = 1 / (√8 / √5) = 1 / √1.6 ≈ 0.7905694150420949
        const expectedT = 0.7905694150420949;

        // Verify the result is within a tight tolerance
        assert.ok(
            Math.abs(t - expectedT) < 1e-12,
            `t value ${t} differs from expected ${expectedT}`
        );

        done();
    });
});