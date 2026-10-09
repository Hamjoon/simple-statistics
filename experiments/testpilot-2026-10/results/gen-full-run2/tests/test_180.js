let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.geometricMean', function(done) {
        // Normal case with integers
        const data = [1, 4, 9];
        const expected = Math.pow(1 * 4 * 9, 1 / data.length);
        assert.strictEqual(simple_statistics.geometricMean(data), expected);

        // Normal case with floating‑point numbers
        const data2 = [1.5, 2.5, 3.5];
        const expected2 = Math.pow(1.5 * 2.5 * 3.5, 1 / data2.length);
        assert.strictEqual(simple_statistics.geometricMean(data2), expected2);

        // Single element should return that element
        assert.strictEqual(simple_statistics.geometricMean([42]), 42);

        // Empty array should throw the correct error
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