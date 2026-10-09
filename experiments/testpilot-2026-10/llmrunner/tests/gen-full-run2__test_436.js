let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.rSquared', function(done) {
        // Perfect fit should give r² = 1
        const perfectSamples = [[0, 0], [1, 1], [2, 2]];
        const perfectLR = simple_statistics.linearRegression(perfectSamples);
        const perfectLine = simple_statistics.linearRegressionLine(perfectLR);
        const perfectR2 = simple_statistics.rSquared(perfectSamples, perfectLine);
        assert.strictEqual(perfectR2, 1);

        // Imperfect fit should give 0 < r² < 1
        const imperfectSamples = [[0, 0], [1, 2], [2, 5]];
        const imperfectLR = simple_statistics.linearRegression(imperfectSamples);
        const imperfectLine = simple_statistics.linearRegressionLine(imperfectLR);
        const imperfectR2 = simple_statistics.rSquared(imperfectSamples, imperfectLine);
        assert(imperfectR2 > 0 && imperfectR2 < 1, 'r² should be between 0 and 1 for an imperfect fit');

        done();
    });
});