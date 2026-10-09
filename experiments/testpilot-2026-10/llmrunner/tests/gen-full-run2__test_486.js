let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleVariance', function(done) {
        // Verify correct calculation
        const data = [1, 2, 3, 4, 5];
        const expected = 2.5; // ( (2+1+0+1+2)^2 ) / (5-1) = 10/4 = 2.5
        const result = simple_statistics.sampleVariance(data);
        assert.strictEqual(result, expected);

        // Verify that an error is thrown for insufficient data points
        assert.throws(
            () => simple_statistics.sampleVariance([42]),
            /sampleVariance requires at least two data points/
        );

        done();
    });
});