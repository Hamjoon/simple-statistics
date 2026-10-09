let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.equalIntervalBreaks', function(done) {
        // Example from the documentation
        let result = simple_statistics.equalIntervalBreaks([1, 2, 3, 4, 5, 6], 4);
        assert.deepStrictEqual(result, [1, 2.25, 3.5, 4.75, 6]);

        // Unsorted input should be handled the same way
        result = simple_statistics.equalIntervalBreaks([6, 1, 3, 5, 2, 4], 4);
        assert.deepStrictEqual(result, [1, 2.25, 3.5, 4.75, 6]);

        // Single class should return just the min and max
        result = simple_statistics.equalIntervalBreaks([10, 20, 30], 1);
        assert.deepStrictEqual(result, [10, 30]);

        // All values identical – step is zero, so all breaks are the same
        result = simple_statistics.equalIntervalBreaks([5, 5, 5, 5], 3);
        assert.deepStrictEqual(result, [5, 5, 5, 5]);

        done();
    });
});