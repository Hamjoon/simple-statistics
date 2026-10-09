let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.equalIntervalBreaks', function(done) {
        // Case 1: array length < 2 should be returned unchanged
        assert.deepStrictEqual(
            simple_statistics.equalIntervalBreaks([], 3),
            []
        );
        assert.deepStrictEqual(
            simple_statistics.equalIntervalBreaks([42], 5),
            [42]
        );

        // Case 2: nClasses = 1 should return [min, max]
        assert.deepStrictEqual(
            simple_statistics.equalIntervalBreaks([2, 8], 1),
            [2, 8]
        );

        // Case 3: typical usage with integer range
        // x = [0,10], nClasses = 2 => [0,5,10]
        assert.deepStrictEqual(
            simple_statistics.equalIntervalBreaks([0, 10], 2),
            [0, 5, 10]
        );

        // Case 4: more classes
        // x = [0,100], nClasses = 4 => [0,25,50,75,100]
        assert.deepStrictEqual(
            simple_statistics.equalIntervalBreaks([0, 100], 4),
            [0, 25, 50, 75, 100]
        );

        // Case 5: non‑integer values and unsorted input (function uses min/max only)
        // x = [3.5, 7.2, 5.1], nClasses = 3 => breaks at 3.5, 4.833..., 6.166..., 7.2
        const result = simple_statistics.equalIntervalBreaks([3.5, 7.2, 5.1], 3);
        const expected = [
            3.5,
            3.5 + (7.2 - 3.5) / 3,
            3.5 + 2 * (7.2 - 3.5) / 3,
            7.2
        ];
        // Use a tolerance for floating point comparison
        result.forEach((val, idx) => {
            assert.ok(Math.abs(val - expected[idx]) < 1e-12);
        });

        done();
    });
});