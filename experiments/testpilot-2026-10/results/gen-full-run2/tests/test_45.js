let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.average', function(done) {
        // Typical case
        const data = [1, 2, 3, 4, 5];
        const avg = simple_statistics.average(data);
        assert.strictEqual(avg, 3, 'Average of [1,2,3,4,5] should be 3');

        // Single element
        assert.strictEqual(simple_statistics.average([42]), 42, 'Average of single-element array should be the element itself');

        // Empty array should return NaN
        const emptyAvg = simple_statistics.average([]);
        assert.ok(isNaN(emptyAvg), 'Average of empty array should be NaN');

        done();
    });
});