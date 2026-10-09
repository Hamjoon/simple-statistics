let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.logAverage', function(done) {
        // Correct calculation: logAverage([1, e, e^2]) should be e
        const arr = [1, Math.E, Math.pow(Math.E, 2)];
        const result = simple_statistics.logAverage(arr);
        assert.ok(Math.abs(result - Math.E) < 1e-12, 'logAverage should return e for [1, e, e^2]');

        // Empty array should throw
        assert.throws(
            () => simple_statistics.logAverage([]),
            /logAverage requires at least one data point/
        );

        // Negative number should throw
        assert.throws(
            () => simple_statistics.logAverage([1, -2]),
            /logAverage requires only non-negative numbers as input/
        );

        done();
    });
});