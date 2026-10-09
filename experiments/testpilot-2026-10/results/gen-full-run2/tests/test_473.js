let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleSkewness', function(done) {
        // Symmetric data should have zero skewness
        const symmetric = [1, 2, 3, 4, 5];
        const skewSym = simple_statistics.sampleSkewness(symmetric);
        assert.ok(Math.abs(skewSym) < 1e-12, 'Skewness of symmetric data should be 0');

        // Asymmetric data – compare against a manual calculation
        const data = [2, 4, 6, 8, 10, 12, 14, 100];
        const n = data.length;
        const mean = data.reduce((a, b) => a + b, 0) / n;
        const variance = data.reduce((s, x) => s + Math.pow(x - mean, 2), 0) / (n - 1);
        const sd = Math.sqrt(variance);
        const sumCubed = data.reduce((s, x) => s + Math.pow((x - mean) / sd, 3), 0);
        const expected = (n / ((n - 1) * (n - 2))) * sumCubed;

        const skew = simple_statistics.sampleSkewness(data);
        assert.ok(Math.abs(skew - expected) < 1e-12,
            `Skewness should match manual calculation (expected ${expected}, got ${skew})`);

        done();
    });
});