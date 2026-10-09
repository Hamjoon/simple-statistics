let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.modeSorted', function(done) {
        // Basic case with a clear single mode
        const data1 = [1, 1, 2, 3, 3, 3, 4];
        assert.strictEqual(simple_statistics.modeSorted(data1), 3, 'mode should be 3');

        // All elements are the same
        const data2 = [2, 2, 2, 2];
        assert.strictEqual(simple_statistics.modeSorted(data2), 2, 'mode should be 2');

        // Multiple values share the highest frequency; should return the first encountered mode
        const data3 = [1, 1, 2, 2, 3];
        assert.strictEqual(simple_statistics.modeSorted(data3), 1, 'mode should be the first mode (1)');

        // Empty array should throw an error
        assert.throws(() => simple_statistics.modeSorted([]), /empty/, 'should throw on empty array');

        done();
    });
});