let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.tTest', function () {
        const sample = [2, 4, 6, 8, 10];
        const expectedMean = 5;

        // Compute the expected t‑statistic using the same formula
        // that simple‑statistics.tTest actually uses (population SD)
        const mean = simple_statistics.mean(sample);
        const s = simple_statistics.standardDeviation(sample); // population SD
        const expectedT = (mean - expectedMean) / (s / Math.sqrt(sample.length));

        const actualT = simple_statistics.tTest(sample, expectedMean);

        // Allow for tiny floating‑point differences
        assert.ok(Math.abs(actualT - expectedT) < 1e-12);
    });
});