let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.chunk', function(done) {
        // Normal behavior
        assert.deepStrictEqual(
            simple_statistics.chunk([1, 2, 3, 4, 5], 2),
            [[1, 2], [3, 4], [5]]
        );
        assert.deepStrictEqual(
            simple_statistics.chunk([1, 2, 3], 3),
            [[1, 2, 3]]
        );
        assert.deepStrictEqual(
            simple_statistics.chunk([1, 2, 3], 5),
            [[1, 2, 3]]
        );
        assert.deepStrictEqual(
            simple_statistics.chunk([1, 2, 3], 1),
            [[1], [2], [3]]
        );

        // Error handling
        assert.throws(
            () => simple_statistics.chunk([1, 2, 3], 0),
            /chunk size must be a positive number/
        );
        assert.throws(
            () => simple_statistics.chunk([1, 2, 3], -2),
            /chunk size must be a positive number/
        );
        assert.throws(
            () => simple_statistics.chunk([1, 2, 3], 2.5),
            /chunk size must be an integer/
        );

        done();
    });
});