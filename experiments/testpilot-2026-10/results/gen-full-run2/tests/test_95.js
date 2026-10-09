let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.chunk', function(done) {
        // Normal chunking
        const input = [1, 2, 3, 4, 5, 6, 7];
        const expected = [[1, 2], [3, 4], [5, 6], [7]];
        assert.deepStrictEqual(simple_statistics.chunk(input, 2), expected);

        // Chunk size of 1 should return each element in its own array
        assert.deepStrictEqual(simple_statistics.chunk([9, 8, 7], 1), [[9], [8], [7]]);

        // Error when chunk size is less than 1
        assert.throws(() => {
            simple_statistics.chunk(input, 0);
        }, /Error/);

        // Error when chunk size is not an integer
        assert.throws(() => {
            simple_statistics.chunk(input, 2.5);
        }, /Error/);

        done();
    });
});