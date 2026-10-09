let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.uniqueCountSorted', function(done) {
        // Empty array
        assert.strictEqual(simple_statistics.uniqueCountSorted([]), 0);
        // Single element
        assert.strictEqual(simple_statistics.uniqueCountSorted([42]), 1);
        // All identical elements
        assert.strictEqual(simple_statistics.uniqueCountSorted([5,5,5,5]), 1);
        // Already unique sorted array
        assert.strictEqual(simple_statistics.uniqueCountSorted([1,2,3,4]), 4);
        // Mixed duplicates
        assert.strictEqual(simple_statistics.uniqueCountSorted([1,1,2,2,3,3,3]), 3);
        // Negative numbers and floats
        assert.strictEqual(simple_statistics.uniqueCountSorted([-2,-2,-1,0,0,0,1.5,1.5]), 4);
        done();
    });
});