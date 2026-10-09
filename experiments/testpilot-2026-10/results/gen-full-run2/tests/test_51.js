let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.averageSimple', function(done) {
        // Normal case: average of a non‑empty array
        const avg = simple_statistics.averageSimple([1, 2, 3, 4]);
        assert.strictEqual(avg, 2.5);

        // Edge case: should throw when the array is empty
        assert.throws(
            () => simple_statistics.averageSimple([]),
            /requires at least one data point/
        );

        done();
    });
});