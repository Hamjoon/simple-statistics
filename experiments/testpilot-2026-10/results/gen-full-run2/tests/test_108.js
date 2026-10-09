let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.coefficientOfVariation', function(done) {
        // Test with a known dataset
        const data = [1, 2, 3, 4, 5];
        // Manual calculation:
        // mean = 3
        // sample standard deviation = sqrt(((1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2) / (5-1))
        //                         = sqrt((4 + 1 + 0 + 1 + 4) / 4) = sqrt(10/4) = sqrt(2.5) ≈ 1.5811388300841898
        // coefficient of variation = std / mean ≈ 1.5811388300841898 / 3 ≈ 0.5270462766947299
        const expected = 0.5270462766947299;
        const result = simple_statistics.coefficientOfVariation(data);
        const epsilon = 1e-12;
        assert.ok(Math.abs(result - expected) < epsilon, `Expected ${expected}, got ${result}`);

        // Edge case: all zeros (mean = 0, std = 0) should produce NaN (0/0)
        const zeroData = [0, 0, 0, 0];
        const zeroResult = simple_statistics.coefficientOfVariation(zeroData);
        assert.ok(isNaN(zeroResult), `Expected NaN for zero data, got ${zeroResult}`);

        done();
    });
});