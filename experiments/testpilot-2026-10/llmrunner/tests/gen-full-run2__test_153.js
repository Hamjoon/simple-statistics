let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.extent', function(done) {
        // Normal case with multiple values
        assert.deepStrictEqual(simple_statistics.extent([1, 2, 3]), [1, 3]);

        // Single-element array should return the same value for min and max
        assert.deepStrictEqual(simple_statistics.extent([5]), [5, 5]);

        // Unordered array with negative numbers
        assert.deepStrictEqual(simple_statistics.extent([3, -1, 2]), [-1, 3]);

        // Empty array should throw an error
        assert.throws(() => simple_statistics.extent([]), /extent requires at least one data point/);

        done();
    });
});