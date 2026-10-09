let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('modeSorted returns correct mode and handles ties and empty input', function(done) {
        // Basic case: mode is the number that appears most often
        assert.strictEqual(simple_statistics.modeSorted([0, 0, 1]), 0);

        // Tie case: when two numbers appear the same maximum number of times,
        // simple-statistics returns the first mode encountered (the smaller value).
        // In a sorted array [1,1,2,2] the first mode encountered is 1.
        assert.strictEqual(simple_statistics.modeSorted([1, 1, 2, 2]), 1);

        // Empty array should throw an Error
        assert.throws(() => simple_statistics.modeSorted([]), Error);

        done();
    });
});