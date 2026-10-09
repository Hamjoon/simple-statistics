let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleVariance', function(done) {
        // Example data set
        const data = [1, 2, 3, 4, 5];
        // Expected unbiased sample variance: sum((x-mean)^2) / (n-1) = 10 / 4 = 2.5
        const expected = 2.5;
        const result = simple_statistics.sampleVariance(data);
        assert.strictEqual(result, expected);
        done();
    });
});