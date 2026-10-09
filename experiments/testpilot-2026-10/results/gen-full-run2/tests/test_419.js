let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.quantileRankSorted', function(done) {
        const q = simple_statistics.quantileRankSorted;

        // Examples from the documentation
        assert.strictEqual(q([1, 2, 3, 4], 3), 0.75);
        assert.strictEqual(q([1, 2, 3, 3, 4], 3), 0.7);
        assert.strictEqual(q([1, 2, 3, 4], 6), 1);
        assert.strictEqual(q([1, 2, 3, 3, 5], 4), 0.8);

        // Edge cases
        assert.strictEqual(q([1, 2, 3], 0), 0);          // below min
        assert.strictEqual(q([1, 2, 3], 1), 0);          // equal to min
        assert.strictEqual(q([1, 2, 3], 3), 1);          // equal to max
        assert.strictEqual(q([1, 2, 3], 5), 1);          // above max

        // Duplicate handling – manual calculation:
        // array: [1,1,1,2,2,3], value: 2
        // less than 2 = 3, equal to 2 = 2, n = 6
        // rank = (3 + 0.5*2) / 6 = 4/6 = 0.666666...
        const result = q([1, 1, 1, 2, 2, 3], 2);
        const expected = 4 / 6;
        assert.ok(Math.abs(result - expected) < 1e-12);

        done();
    });
});