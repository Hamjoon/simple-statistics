let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileSorted', function(done) {
        // 1. Empty array should throw
        assert.throws(() => {
            simple_statistics.quantileSorted([], 0.5);
        }, /quantile requires at least one data point/);

        // 2. p out of range should throw
        assert.throws(() => {
            simple_statistics.quantileSorted([1, 2, 3], -0.1);
        }, /quantiles must be between 0 and 1/);
        assert.throws(() => {
            simple_statistics.quantileSorted([1, 2, 3], 1.1);
        }, /quantiles must be between 0 and 1/);

        // 3. p = 0 returns first element
        assert.strictEqual(simple_statistics.quantileSorted([1, 2, 3], 0), 1);

        // 4. p = 1 returns last element
        assert.strictEqual(simple_statistics.quantileSorted([1, 2, 3], 1), 3);

        // 5. Non‑integer index (ceil case)
        // length 5, p = 0.3 => idx = 1.5, ceil = 2 => return element at index 1 (0‑based)
        const arrNonInt = [10, 20, 30, 40, 50];
        assert.strictEqual(simple_statistics.quantileSorted(arrNonInt, 0.3), 20);

        // 6. Even length with integer index => average of two middle values
        // length 4, p = 0.5 => idx = 2 (integer) => average of x[1] and x[2]
        const arrEven = [1, 2, 3, 4];
        assert.strictEqual(simple_statistics.quantileSorted(arrEven, 0.5), 2.5);

        // 7. Odd length with integer index => direct element
        // length 5, p = 0.4 => idx = 2 (integer) => return x[2]
        const arrOdd = [5, 6, 7, 8, 9];
        assert.strictEqual(simple_statistics.quantileSorted(arrOdd, 0.4), 7);

        done();
    });
});