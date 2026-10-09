let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.rSquared', function(done) {
        // Perfect linear relationship: y = 2x + 1  →  R² should be 1
        const dataPerfect = [
            [1, 3],
            [2, 5],
            [3, 7],
            [4, 9],
            [5, 11]
        ];
        const perfectLine = (x) => 2 * x + 1;
        const r2Perfect = simple_statistics.rSquared(dataPerfect, perfectLine);
        assert.strictEqual(r2Perfect, 1);

        // Constant prediction against a perfect line: y = 2x + 0  →  R² should be 0
        const dataZero = [
            [1, 2],
            [2, 4],
            [3, 6]
        ];
        const constantLine = () => 4; // predicts the mean of y
        const r2Zero = simple_statistics.rSquared(dataZero, constantLine);
        // Allow for tiny floating‑point errors
        assert.ok(Math.abs(r2Zero) < 1e-12);

        done();
    });
});