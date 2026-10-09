let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.uniqueCountSorted', function(done) {
        // basic numeric cases
        assert.strictEqual(simple_statistics.uniqueCountSorted([1, 2, 3]), 3, 'all distinct numbers');
        assert.strictEqual(simple_statistics.uniqueCountSorted([1, 1, 1]), 1, 'all same numbers');
        assert.strictEqual(simple_statistics.uniqueCountSorted([1, 1, 2, 2, 3, 3]), 3, 'pairs of numbers');

        // empty array
        assert.strictEqual(simple_statistics.uniqueCountSorted([]), 0, 'empty array');

        // sorted strings
        assert.strictEqual(simple_statistics.uniqueCountSorted(['a', 'b', 'c']), 3, 'distinct strings');
        assert.strictEqual(simple_statistics.uniqueCountSorted(['a', 'a', 'a']), 1, 'identical strings');

        // mixed primitive types (still sorted according to JS < ordering)
        assert.strictEqual(simple_statistics.uniqueCountSorted([false, false, true]), 2, 'boolean values');

        // objects – each distinct reference counts as unique unless same reference appears
        const obj = {x:1};
        const arr = [obj, obj, {x:1}];
        // The array must be sorted; we assume the test author provides a sorted version.
        // Since objects are compared by reference, the two identical references count as one.
        assert.strictEqual(simple_statistics.uniqueCountSorted(arr), 2, 'object references');

        done();
    });
});