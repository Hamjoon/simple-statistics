let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.sumNthPowerDeviations', function(done) {
        const data = [1, 2, 3, 4, 5];
        const mean = simple_statistics.mean(data);

        // Expected sum of squared deviations (n = 2)
        const expected2 = data.reduce((sum, v) => {
            const d = v - mean;
            return sum + d * d;
        }, 0);

        // Expected sum of cubed deviations (n = 3)
        const expected3 = data.reduce((sum, v) => {
            const d = v - mean;
            return sum + Math.pow(d, 3);
        }, 0);

        const result2 = simple_statistics.sumNthPowerDeviations(data, 2);
        const result3 = simple_statistics.sumNthPowerDeviations(data, 3);

        // Verify the squared‑deviation path (uses the optimized branch)
        assert.strictEqual(result2, expected2);

        // Verify the generic path for n != 2 (allow tiny floating‑point differences)
        assert.ok(Math.abs(result3 - expected3) < 1e-12);

        done();
    });
});