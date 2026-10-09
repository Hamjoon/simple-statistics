let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.medianSorted', function(done) {
        // odd number of elements
        assert.strictEqual(simple_statistics.medianSorted([1, 2, 3]), 2);
        // even number of elements
        assert.strictEqual(simple_statistics.medianSorted([1, 2, 3, 4]), 2.5);
        // negative numbers and zero
        assert.strictEqual(simple_statistics.medianSorted([-5, -1, 0, 5]), -0.5);
        // single element
        assert.strictEqual(simple_statistics.medianSorted([10]), 10);
        // empty array should return undefined
        assert.strictEqual(simple_statistics.medianSorted([]), undefined);
        done();
    });
});