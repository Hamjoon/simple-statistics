let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.modeSorted', function(done) {
        // Basic case with a clear single mode
        const data1 = [1, 1, 2, 3, 3, 3, 4];
        assert.strictEqual(simple_statistics.modeSorted(data1), 3, 'mode should be 3');

        // All elements are the same
        const data2 = [2, 2, 2, 2];
        assert.strictEqual(simple_statistics.modeSorted(data2), 2, 'mode should be 2');

        // Multiple values share the highest frequency; should return the first encountered mode
        const data3 = [1, 1, 2, 2, 3];
        assert.strictEqual(simple_statistics.modeSorted(data3), 1, 'mode should be the first mode (1)');

        // Empty array should throw an error
        // simple-statistics throws an error with the message "Array must have at least one element"
        // Adjust the regex to match the actual message.
        assert.throws(
            () => simple_statistics.modeSorted([]),
            /must have at least one element/,
            'should throw on empty array'
        );

        done();
    });
});