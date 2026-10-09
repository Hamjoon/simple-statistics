let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.geometricMean', function(done) {
        // Known value: geometric mean of [1, 3, 9, 27] = (1*3*9*27)^(1/4)
        const gm1 = simple_statistics.geometricMean([1, 3, 9, 27]);
        const expected1 = Math.pow(1 * 3 * 9 * 27, 1 / 4);
        assert.ok(Math.abs(gm1 - expected1) < 1e-12, 'geometricMean([1,3,9,27]) should match expected value');

        // Any array containing zero should return 0
        const gm2 = simple_statistics.geometricMean([0, 5, 10]);
        assert.strictEqual(gm2, 0, 'geometricMean with a zero element should be 0');

        // Empty array should return NaN
        const gm3 = simple_statistics.geometricMean([]);
        assert.ok(isNaN(gm3), 'geometricMean of empty array should be NaN');

        // Array with negative numbers should return NaN (geometric mean undefined for negatives)
        const gm4 = simple_statistics.geometricMean([-1, 2, 3]);
        assert.ok(isNaN(gm4), 'geometricMean with negative values should be NaN');

        done();
    });
});