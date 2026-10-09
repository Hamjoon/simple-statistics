let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleSkewness', function(done) {
        // Known example from the documentation
        const data = [2, 4, 6, 3, 1];
        const result = simple_statistics.sampleSkewness(data);
        const expected = 0.590128656384365;
        // Allow a tiny tolerance for floating‑point rounding
        assert.ok(Math.abs(result - expected) < 1e-12, `expected ${expected}, got ${result}`);

        // Verify that an error is thrown for insufficient data points
        assert.throws(() => simple_statistics.sampleSkewness([1, 2]), /Error/);

        done();
    });
});