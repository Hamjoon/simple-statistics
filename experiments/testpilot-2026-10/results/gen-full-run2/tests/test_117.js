let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combinationsReplacement', function(done) {
        // Example from the documentation
        let result = simple_statistics.combinationsReplacement([1, 2], 2);
        assert.deepStrictEqual(result, [[1, 1], [1, 2], [2, 2]]);

        // k = 1 should return each element wrapped in its own array
        result = simple_statistics.combinationsReplacement(['a', 'b', 'c'], 1);
        assert.deepStrictEqual(result, [['a'], ['b'], ['c']]);

        // k larger than the input length (still works because of replacement)
        result = simple_statistics.combinationsReplacement([1, 2], 3);
        assert.deepStrictEqual(result, [
            [1, 1, 1],
            [1, 1, 2],
            [1, 2, 2],
            [2, 2, 2]
        ]);

        // Empty input should always yield an empty array of combinations
        result = simple_statistics.combinationsReplacement([], 5);
        assert.deepStrictEqual(result, []);

        done();
    });
});