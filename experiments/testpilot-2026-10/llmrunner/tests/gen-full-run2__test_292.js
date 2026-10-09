let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.median', function(done) {
        // odd number of elements
        assert.strictEqual(simple_statistics.median([1, 2, 3, 4, 5]), 3);
        // unsorted odd number of elements
        assert.strictEqual(simple_statistics.median([5, 1, 2, 3, 4]), 3);
        // even number of elements
        assert.strictEqual(simple_statistics.median([10, 2, 5, 100, 2, 1]), 3.5);
        // simple even case
        assert.strictEqual(simple_statistics.median([1, 2]), 1.5);
        // negative numbers
        assert.strictEqual(simple_statistics.median([-5, -1, -3]), -3);
        done();
    });
});