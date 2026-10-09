let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.extent', function(done) {
        // Normal case
        assert.deepStrictEqual(simple_statistics.extent([1, 2, 3, 4]), [1, 4]);

        // Mixed negative and positive values
        assert.deepStrictEqual(simple_statistics.extent([-5, 0, 10, 3]), [-5, 10]);

        // Single element array should return that element as both min and max
        assert.deepStrictEqual(simple_statistics.extent([42]), [42, 42]);

        // Empty array should throw an Error
        assert.throws(() => simple_statistics.extent([]), Error);

        done();
    });
});