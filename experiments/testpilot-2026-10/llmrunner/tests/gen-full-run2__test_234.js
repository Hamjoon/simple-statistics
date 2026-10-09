let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.logAverage', function(done) {
        // Normal case – geometric mean of [1, 3, 9] is 3
        const arr = [1, 3, 9];
        const result = simple_statistics.logAverage(arr);
        assert.strictEqual(result, 3);

        // Empty array should throw the expected error
        assert.throws(
            () => simple_statistics.logAverage([]),
            /logAverage requires at least one data point/
        );

        // Negative numbers should cause an error
        assert.throws(
            () => simple_statistics.logAverage([1, -2, 3]),
            /logAverage requires only non-negative numbers as input/
        );

        done();
    });
});