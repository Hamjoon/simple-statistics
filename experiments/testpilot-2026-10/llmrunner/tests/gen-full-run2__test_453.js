let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCorrelation', function(done) {
        // Perfect positive correlation
        const x = [1, 2, 3, 4, 5];
        const y = [2, 4, 6, 8, 10];
        const corr = simple_statistics.sampleCorrelation(x, y);
        assert.ok(Math.abs(corr - 1) < 1e-12, 'Correlation should be 1 for perfectly positively correlated data');

        // Perfect negative correlation
        const yNeg = [10, 8, 6, 4, 2];
        const corrNeg = simple_statistics.sampleCorrelation(x, yNeg);
        assert.ok(Math.abs(corrNeg + 1) < 1e-12, 'Correlation should be -1 for perfectly negatively correlated data');

        done();
    });
});