let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleKurtosis', function(done) {
        // Sample data: a simple arithmetic progression.
        // For the array [1,2,3,4,5] the sample excess kurtosis is known to be -1.2.
        const data = [1, 2, 3, 4, 5];
        const expected = -1.2;
        const result = simple_statistics.sampleKurtosis(data);
        // Allow a tiny tolerance for floating‑point rounding.
        assert.ok(Math.abs(result - expected) < 1e-12, `Expected ${expected}, got ${result}`);
        done();
    });
});