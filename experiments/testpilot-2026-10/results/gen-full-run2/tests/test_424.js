let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.quantileSorted', function(done) {
        // 1. Median of odd-length array (non‑integer index)
        const odd = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
        assert.strictEqual(simple_statistics.quantileSorted(odd, 0.5), 9);

        // 2. Median of even‑length array (integer index, average)
        const even = [1, 2, 3, 4];
        assert.strictEqual(simple_statistics.quantileSorted(even, 0.5), 2.5);

        // 3. p = 0 returns first element
        assert.strictEqual(simple_statistics.quantileSorted(odd, 0), 3);

        // 4. p = 1 returns last element
        assert.strictEqual(simple_statistics.quantileSorted(odd, 1), 20);

        // 5. Non‑integer index case (ceil‑1 rule)
        const sample = [10, 20, 30, 40, 50];
        assert.strictEqual(simple_statistics.quantileSorted(sample, 0.3), 20);

        // 6. Empty array should throw
        assert.throws(() => {
            simple_statistics.quantileSorted([], 0.5);
        }, /quantile requires at least one data point/);

        // 7. p out of range should throw
        assert.throws(() => {
            simple_statistics.quantileSorted(sample, -0.1);
        }, /quantiles must be between 0 and 1/);

        done();
    });
});