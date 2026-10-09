let mocha = require('mocha');
let assert = require('assert');
let ss = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.tTestTwoSample', function (done) {
        // Identical samples – the t‑statistic should be (practically) 0
        const sampleA = [1, 2, 3, 4, 5];
        const sampleB = [1, 2, 3, 4, 5];
        const tIdentical = ss.tTestTwoSample(sampleA, sampleB, 0);
        assert.ok(Math.abs(tIdentical) < 1e-12, 't‑statistic for identical samples should be 0');

        // Clearly different samples – compute the two‑tailed p‑value and ensure it is tiny
        const sampleX = [10, 12, 14, 16];
        const sampleY = [1, 2, 3, 4];
        const tDistinct = ss.tTestTwoSample(sampleX, sampleY, 0);

        // degrees of freedom for the two‑sample t‑test (unequal variance version)
        const df = sampleX.length + sampleY.length - 2;

        // two‑tailed p‑value from the t‑distribution
        const pDistinct = 2 * (1 - ss.tDistribution(df).cdf(Math.abs(tDistinct)));

        assert.ok(pDistinct < 0.001, 'p‑value for clearly different samples should be very small');

        done();
    });
});