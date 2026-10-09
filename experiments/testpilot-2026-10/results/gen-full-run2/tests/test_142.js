let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.equalIntervalBreaks', function(done) {
        // Test 1: basic increasing sequence
        const data1 = [1, 2, 3, 4, 5];
        const breaks1 = simple_statistics.equalIntervalBreaks(data1, 2);
        // min = 1, max = 5, step = (5-1)/2 = 2 → [1, 3, 5]
        assert.deepStrictEqual(breaks1, [1, 3, 5]);

        // Test 2: unsorted array with negative values
        const data2 = [10, -5, 0, 5];
        const breaks2 = simple_statistics.equalIntervalBreaks(data2, 3);
        // min = -5, max = 10, step = (10 - (-5)) / 3 = 5 → [-5, 0, 5, 10]
        assert.deepStrictEqual(breaks2, [-5, 0, 5, 10]);

        // Test 3: single class (should return just min and max)
        const data3 = [2, 8];
        const breaks3 = simple_statistics.equalIntervalBreaks(data3, 1);
        assert.deepStrictEqual(breaks3, [2, 8]);

        done();
    });
});