let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.maxSorted', function(done) {
        // Typical sorted array
        const arr = [-100, -10, 1, 2, 5];
        const max = simple_statistics.maxSorted(arr);
        assert.strictEqual(max, 5);

        // Single-element array
        assert.strictEqual(simple_statistics.maxSorted([42]), 42);

        // All negative numbers
        assert.strictEqual(simple_statistics.maxSorted([-5, -3, -1]), -1);

        done();
    });
});