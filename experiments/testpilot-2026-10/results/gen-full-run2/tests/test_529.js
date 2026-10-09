let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.subtractFromMean', function(done) {
        // Basic case
        let mean = 5;
        let n = 3;
        let value = 2;
        let expected = (mean * n - value) / (n - 1); // 6.5
        assert.strictEqual(simple_statistics.subtractFromMean(mean, n, value), expected);

        // When value equals mean * n, result should be 0
        mean = 4;
        n = 5;
        value = mean * n; // 20
        expected = 0;
        assert.strictEqual(simple_statistics.subtractFromMean(mean, n, value), expected);

        // Negative numbers
        mean = -2;
        n = 4;
        value = -5;
        expected = (mean * n - value) / (n - 1); // ((-8) - (-5)) / 3 = (-3)/3 = -1
        assert.strictEqual(simple_statistics.subtractFromMean(mean, n, value), expected);

        // Decimal values
        mean = 2.5;
        n = 6;
        value = 7.5;
        expected = (mean * n - value) / (n - 1); // (15 - 7.5) / 5 = 7.5 / 5 = 1.5
        assert.strictEqual(simple_statistics.subtractFromMean(mean, n, value), expected);

        done();
    });
});