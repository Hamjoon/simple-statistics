let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.medianSorted', function(done) {
        // odd number of elements
        const odd = [1, 2, 3, 4, 5];
        assert.strictEqual(simple_statistics.medianSorted(odd), 3);

        // even number of elements
        const even = [1, 2, 3, 4];
        assert.strictEqual(simple_statistics.medianSorted(even), 2.5);

        // example from the documentation (must be sorted before calling)
        const unsorted = [10, 2, 5, 100, 2, 1];
        const sorted = unsorted.slice().sort((a, b) => a - b);
        assert.strictEqual(simple_statistics.medianSorted(sorted), 52.5);

        done();
    });
});