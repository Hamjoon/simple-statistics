let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.equalIntervalBreaks', function(done) {
        // Standard case with 4 classes
        const result1 = simple_statistics.equalIntervalBreaks([1, 2, 3, 4, 5, 6], 4);
        const expected1 = [1, 2.25, 3.5, 4.75, 6];
        assert.deepStrictEqual(result1, expected1, 'should create correct equal interval breaks');

        // Edge case: only one class (should return [min, max])
        const result2 = simple_statistics.equalIntervalBreaks([10, 20], 1);
        const expected2 = [10, 20];
        assert.deepStrictEqual(result2, expected2, 'should return min and max for a single class');

        // Edge case: input array with fewer than 2 elements (should return the original array)
        const result3 = simple_statistics.equalIntervalBreaks([5], 3);
        const expected3 = [5];
        assert.deepStrictEqual(result3, expected3, 'should return the original array when length < 2');

        done();
    });
});