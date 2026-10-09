let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.tTestTwoSample', function(done) {
        // Basic case – default difference (0)
        const result = simple_statistics.tTestTwoSample([1, 2, 3, 4], [3, 4, 5, 6]);
        const expected = -2.1908902300206643;
        assert.ok(Math.abs(result - expected) < 1e-12, `Expected ${expected}, got ${result}`);

        // Explicit zero difference should give the same result
        const resultZero = simple_statistics.tTestTwoSample([1, 2, 3, 4], [3, 4, 5, 6], 0);
        assert.ok(Math.abs(resultZero - expected) < 1e-12, 'Explicit zero difference differs');

        // Non‑zero difference – compare against a manually computed value
        const diff = 1;
        const resultDiff = simple_statistics.tTestTwoSample([1, 2, 3, 4], [3, 4, 5, 6], diff);
        const meanX = simple_statistics.mean([1, 2, 3, 4]);
        const meanY = simple_statistics.mean([3, 4, 5, 6]);
        const varX = simple_statistics.sampleVariance([1, 2, 3, 4]);
        const varY = simple_statistics.sampleVariance([3, 4, 5, 6]);
        const n = 4, m = 4;
        const weightedVar = ((n - 1) * varX + (m - 1) * varY) / (n + m - 2);
        const manual = (meanX - meanY - diff) / Math.sqrt(weightedVar * (1 / n + 1 / m));
        assert.ok(Math.abs(resultDiff - manual) < 1e-12, 'Non‑zero difference calculation mismatch');

        // Edge case – one empty sample should return null
        const nullResult = simple_statistics.tTestTwoSample([], [1, 2, 3]);
        assert.strictEqual(nullResult, null, 'Empty sample did not return null');

        done();
    });
});