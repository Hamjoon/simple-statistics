let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.min', function(done) {
        // Normal case: should return the smallest number
        const arr = [1, 5, -10, 100, 2];
        const result = simple_statistics.min(arr);
        assert.strictEqual(result, -10, 'min should return -10 for the given array');

        // Edge case: empty array should throw an Error
        assert.throws(
            () => simple_statistics.min([]),
            Error,
            'min should throw an Error when the input array is empty'
        );

        done();
    });
});