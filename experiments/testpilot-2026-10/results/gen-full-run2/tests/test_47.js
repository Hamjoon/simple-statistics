let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.average', function(done) {
        // Use the library's mean/average function (whichever is exported)
        const avg = simple_statistics.mean || simple_statistics.average;

        // Normal case: average of [0, 10, 20] should be 10
        const result = avg([0, 10, 20]);
        assert.strictEqual(result, 10);

        // Edge case: calling with an empty array should throw the expected error
        assert.throws(() => {
            avg([]);
        }, /mean requires at least one data point/);

        done();
    });
});