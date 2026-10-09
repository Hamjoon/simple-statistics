let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.chunk', function(done) {
        // Normal chunking
        let result = simple_statistics.chunk([1, 2, 3, 4, 5], 2);
        assert.deepStrictEqual(result, [[1, 2], [3, 4], [5]]);

        // Different chunk size
        result = simple_statistics.chunk([1, 2, 3, 4, 5], 3);
        assert.deepStrictEqual(result, [[1, 2, 3], [4, 5]]);

        // Chunk size larger than the array length
        result = simple_statistics.chunk([1, 2, 3], 10);
        assert.deepStrictEqual(result, [[1, 2, 3]]);

        // Chunk size of zero should throw an error
        assert.throws(() => {
            simple_statistics.chunk([1, 2, 3], 0);
        });

        done();
    });
});