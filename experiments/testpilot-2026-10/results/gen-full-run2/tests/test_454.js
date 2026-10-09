let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCorrelation', function(done) {
        // Example from the documentation
        const corr1 = simple_statistics.sampleCorrelation(
            [1, 2, 3, 4, 5, 6],
            [2, 2, 3, 4, 5, 60]
        );
        assert.strictEqual(corr1.toFixed(2), '0.69');

        // Perfect positive correlation
        const corr2 = simple_statistics.sampleCorrelation(
            [1, 2, 3],
            [2, 4, 6]
        );
        assert.strictEqual(corr2, 1);

        // Perfect negative correlation
        const corr3 = simple_statistics.sampleCorrelation(
            [1, 2, 3],
            [3, 2, 1]
        );
        assert.strictEqual(corr3, -1);

        done();
    });
});