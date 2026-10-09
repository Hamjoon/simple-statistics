let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.tTestTwoSample', function(done) {
        // Identical samples – the p‑value should be 1 (or extremely close)
        const sampleA = [1, 2, 3, 4, 5];
        const sampleB = [1, 2, 3, 4, 5];
        const pIdentical = simple_statistics.tTestTwoSample(sampleA, sampleB, 0);
        assert.ok(Math.abs(pIdentical - 1) < 1e-12, 'p-value for identical samples should be 1');

        // Clearly different samples – the p‑value should be very small
        const sampleX = [10, 12, 14, 16];
        const sampleY = [1, 2, 3, 4];
        const pDistinct = simple_statistics.tTestTwoSample(sampleX, sampleY, 0);
        assert.ok(pDistinct < 0.001, 'p-value for clearly different samples should be very small');

        done();
    });
});