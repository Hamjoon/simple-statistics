let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combinationsReplacement', function(done) {
        // Example from the documentation
        const result = simple_statistics.combinationsReplacement([1, 2], 2);
        const expected = [[1, 1], [1, 2], [2, 2]];
        assert.deepStrictEqual(result, expected);

        // Additional sanity check with a different data type and k = 1
        const result2 = simple_statistics.combinationsReplacement(['a', 'b', 'c'], 1);
        const expected2 = [['a'], ['b'], ['c']];
        assert.deepStrictEqual(result2, expected2);

        done();
    });
});