let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.mode', function(done) {
        // Basic mode calculation
        assert.strictEqual(simple_statistics.mode([1, 2, 2, 3]), 2, 'Mode of [1,2,2,3] should be 2');

        // Unsorted input should still return the correct mode
        assert.strictEqual(simple_statistics.mode([5, 1, 5, 2, 5, 3]), 5, 'Mode of unsorted array should be 5');

        // When there is a tie, the smallest value (first after sorting) is returned
        assert.strictEqual(simple_statistics.mode([1, 2, 2, 1]), 1, 'Mode of [1,2,2,1] should be 1 (smallest tied mode)');

        // Empty array should throw an error
        assert.throws(
            () => simple_statistics.mode([]),
            /mode requires at least one data point/,
            'Calling mode on an empty array should throw an error'
        );

        done();
    });
});