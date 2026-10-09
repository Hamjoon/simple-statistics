let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.medianSorted', function(done) {
        // odd number of elements
        const odd = [1, 2, 3, 4, 5];
        const oddMedian = simple_statistics.medianSorted(odd);
        assert.strictEqual(oddMedian, 3);

        // even number of elements
        const even = [1, 2, 3, 4];
        const evenMedian = simple_statistics.medianSorted(even);
        assert.strictEqual(evenMedian, 2.5);

        done();
    });
});