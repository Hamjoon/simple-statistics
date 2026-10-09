let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.harmonicMean', function(done) {
        // Normal case
        const data = [1, 2, 4];
        // harmonic mean = 3 / (1/1 + 1/2 + 1/4) = 3 / (1 + 0.5 + 0.25) = 3 / 1.75 = 1.7142857142857142
        const expected = 3 / (1 + 0.5 + 0.25);
        const result = simple_statistics.harmonicMean(data);
        assert.strictEqual(result, expected);

        // Empty array should throw
        assert.throws(() => {
            simple_statistics.harmonicMean([]);
        }, /harmonicMean requires at least one data point/);

        // Non‑positive number should throw
        assert.throws(() => {
            simple_statistics.harmonicMean([1, -2, 3]);
        }, /harmonicMean requires only positive numbers as input/);

        done();
    });
});