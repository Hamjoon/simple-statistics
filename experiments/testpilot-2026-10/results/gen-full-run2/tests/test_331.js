let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.numericSort', function(done) {
        const input = [3, 1, 2, 10, 5];
        const expected = [1, 2, 3, 5, 10];
        const result = simple_statistics.numericSort(input);
        // Verify the returned array is correctly sorted
        assert.deepStrictEqual(result, expected);
        // Verify the original array has not been mutated
        assert.deepStrictEqual(input, [3, 1, 2, 10, 5]);
        done();
    });
});