let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.extent', function(done) {
        // Typical case
        assert.deepStrictEqual(simple_statistics.extent([1, 2, 3, 4]), [1, 4]);

        // Unordered array with negative numbers
        assert.deepStrictEqual(simple_statistics.extent([5, -2, 7, 0]), [-2, 7]);

        // Single-element array
        assert.deepStrictEqual(simple_statistics.extent([42]), [42, 42]);

        // Empty array should throw
        assert.throws(
            () => simple_statistics.extent([]),
            /extent requires at least one data point/
        );

        done();
    });
});