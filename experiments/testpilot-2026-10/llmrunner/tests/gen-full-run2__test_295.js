let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.medianSorted', function(done) {
        // odd number of elements
        const odd = [1, 2, 3, 4, 5];
        assert.strictEqual(simple_statistics.medianSorted(odd), 3);

        // even number of elements (average of middle two)
        const even = [1, 2, 3, 4];
        assert.strictEqual(simple_statistics.medianSorted(even), 2.5);

        // negative numbers
        const negative = [-5, -3, -1, 0, 2];
        assert.strictEqual(simple_statistics.medianSorted(negative), -1);

        // duplicate values
        const duplicates = [2, 2, 2, 2];
        assert.strictEqual(simple_statistics.medianSorted(duplicates), 2);

        // single element array
        const single = [42];
        assert.strictEqual(simple_statistics.medianSorted(single), 42);

        done();
    });
});