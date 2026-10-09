let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.combinations', function(done) {
        // 1. Basic case: choose 2 from [1,2,3]
        let result = simple_statistics.combinations([1, 2, 3], 2);
        let expected = [
            [1, 2],
            [1, 3],
            [2, 3]
        ];
        assert.deepStrictEqual(result, expected, 'combinations([1,2,3],2) should return all 2‑element combos');

        // 2. k = 1 should return each element as a singleton array
        result = simple_statistics.combinations(['a', 'b', 'c'], 1);
        expected = [
            ['a'],
            ['b'],
            ['c']
        ];
        assert.deepStrictEqual(result, expected, 'combinations with k=1 should return singletons');

        // 3. k equal to the length of the array should return the whole array as the only combination
        result = simple_statistics.combinations([true, false], 2);
        expected = [
            [true, false]
        ];
        assert.deepStrictEqual(result, expected, 'k equal to array length should return one combination');

        // 4. k greater than the length should return an empty array
        result = simple_statistics.combinations([1, 2], 3);
        expected = [];
        assert.deepStrictEqual(result, expected, 'k greater than array length should yield no combinations');

        // 5. Empty input array should always return an empty array (for k > 0)
        result = simple_statistics.combinations([], 1);
        expected = [];
        assert.deepStrictEqual(result, expected, 'empty input should produce no combinations');

        done();
    });
});