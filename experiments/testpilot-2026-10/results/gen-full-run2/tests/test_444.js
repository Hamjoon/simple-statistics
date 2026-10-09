let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.rms', function(done) {
        // Normal case: mixed positive and negative numbers
        const data = [-1, 1, -2, 2];
        const expected = Math.sqrt((1 + 1 + 4 + 4) / data.length); // sqrt(10/4) = sqrt(2.5)
        const result = simple_statistics.rms(data);
        assert.strictEqual(result, expected);

        // Single element should return its absolute value (sqrt(x²) = |x|)
        assert.strictEqual(simple_statistics.rms([5]), 5);
        assert.strictEqual(simple_statistics.rms([-7]), 7);

        // Empty array should throw the expected error
        assert.throws(
            () => simple_statistics.rms([]),
            /rootMeanSquare requires at least one data point/
        );

        done();
    });
});