let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.tTestTwoSample', function(done) {
        // Basic case with equal sized samples
        const sampleX = [2, 4, 6, 8];
        const sampleY = [1, 3, 5, 7];
        const t = simple_statistics.tTestTwoSample(sampleX, sampleY);
        // Expected value calculated manually ≈ 0.5477225575
        assert.ok(Math.abs(t - 0.5477225575) < 1e-7, `t should be approx 0.5477225575, got ${t}`);

        // Same data but with a difference of 1 should give t ≈ 0
        const tDiff = simple_statistics.tTestTwoSample(sampleX, sampleY, 1);
        assert.ok(Math.abs(tDiff) < 1e-12, `t with difference=1 should be approx 0, got ${tDiff}`);

        // Edge case: one of the samples is empty → should return null
        const emptyResult = simple_statistics.tTestTwoSample([], sampleY);
        assert.strictEqual(emptyResult, null, 'Result should be null when a sample is empty');

        done();
    });
});