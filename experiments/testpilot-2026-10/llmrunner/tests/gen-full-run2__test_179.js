let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.geometricMean', function(done) {
        // Basic case: all ones
        assert.strictEqual(simple_statistics.geometricMean([1, 1, 1]), 1);

        // Known geometric mean: (1*2*3*4)^(1/4) = 24^(0.25)
        const expected = Math.pow(24, 0.25);
        const result = simple_statistics.geometricMean([1, 2, 3, 4]);
        assert.ok(Math.abs(result - expected) < 1e-12, 'geometricMean([1,2,3,4]) should be close to 24^(0.25)');

        // Zero in the data set forces the mean to zero
        assert.strictEqual(simple_statistics.geometricMean([0, 5, 10]), 0);

        // Single element should return that element
        assert.strictEqual(simple_statistics.geometricMean([7]), 7);

        // Empty array should throw an error
        assert.throws(
            () => simple_statistics.geometricMean([]),
            /geometricMean requires at least one data point/
        );

        // Negative numbers should cause an error
        assert.throws(
            () => simple_statistics.geometricMean([1, -2, 3]),
            /geometricMean requires only non-negative numbers/
        );

        done();
    });
});