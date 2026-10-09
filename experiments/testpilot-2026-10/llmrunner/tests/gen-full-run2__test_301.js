let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.min', function(done) {
        // Normal case: mixed positive, negative and zero values
        const mixed = [5, 2, 9, -1, 3];
        const resultMixed = simple_statistics.min(mixed);
        assert.strictEqual(resultMixed, -1, 'Should return the smallest value in a mixed array');

        // Single-element array should return that element
        const single = [42];
        const resultSingle = simple_statistics.min(single);
        assert.strictEqual(resultSingle, 42, 'Should return the only element for a single‑item array');

        // Empty array should throw the expected error
        assert.throws(
            () => simple_statistics.min([]),
            /min requires at least one data point/,
            'Should throw an error when the input array is empty'
        );

        done();
    });
});