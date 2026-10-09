let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.median', function(done) {
        // odd number of elements
        assert.strictEqual(simple_statistics.median([1, 3, 2]), 2);
        // even number of elements (average of middle two)
        assert.strictEqual(simple_statistics.median([1, 2, 3, 4]), 2.5);
        // unsorted array with negative numbers
        assert.strictEqual(simple_statistics.median([-5, -1, -3]), -3);
        // single element array
        assert.strictEqual(simple_statistics.median([10]), 10);
        // all identical values
        assert.strictEqual(simple_statistics.median([5, 5, 5, 5]), 5);
        // unsorted even length array
        assert.strictEqual(simple_statistics.median([7, 1, 3, 5]), 4);
        done();
    });
});