let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.tTestTwoSample', function(done) {
        // Example from the documentation
        const sampleX = [1, 2, 3, 4];
        const sampleY = [3, 4, 5, 6];
        const expected = -2.1908902300206643;

        const result = simple_statistics.tTestTwoSample(sampleX, sampleY, 0);

        // Use a tolerance because of floating‑point arithmetic
        const tolerance = 1e-12;
        assert.ok(Math.abs(result - expected) < tolerance, `Expected ${expected}, got ${result}`);

        // Also verify that omitting the difference argument defaults to 0
        const resultDefault = simple_statistics.tTestTwoSample(sampleX, sampleY);
        assert.ok(Math.abs(resultDefault - expected) < tolerance, `Default difference test failed`);

        done();
    });
});