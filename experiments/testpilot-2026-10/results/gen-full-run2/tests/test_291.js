let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.median', function(done) {
        // Even number of elements, unsorted
        assert.strictEqual(simple_statistics.median([10, 2, 5, 100, 2, 1]), 3.5);
        // Odd number of elements, unsorted
        assert.strictEqual(simple_statistics.median([1, 3, 2]), 2);
        // Even number of elements, already sorted
        assert.strictEqual(simple_statistics.median([2, 4, 5, 7]), 4.5);
        // Negative numbers
        assert.strictEqual(simple_statistics.median([-5, -1, -3]), -3);
        // Single element
        assert.strictEqual(simple_statistics.median([0]), 0);
        done();
    });
});