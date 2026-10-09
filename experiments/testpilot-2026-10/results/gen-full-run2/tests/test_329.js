let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.numericSort', function(done) {
        // Test that numericSort returns a sorted copy and does not mutate the original
        const original = [3, 1, 2];
        const sorted = simple_statistics.numericSort(original);
        // Should be sorted numerically
        assert.deepStrictEqual(sorted, [1, 2, 3]);
        // Original array must remain unchanged
        assert.deepStrictEqual(original, [3, 1, 2]);
        // The returned array should be a different reference
        assert.notStrictEqual(sorted, original);

        // Additional test with negative numbers and floats
        const original2 = [0.5, -1, 2];
        const sorted2 = simple_statistics.numericSort(original2);
        assert.deepStrictEqual(sorted2, [-1, 0.5, 2]);
        assert.deepStrictEqual(original2, [0.5, -1, 2]);
        assert.notStrictEqual(sorted2, original2);

        done();
    });
});