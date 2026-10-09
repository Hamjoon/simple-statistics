let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.average', function(done) {
        // Normal cases
        assert.strictEqual(simple_statistics.average([0, 10]), 5);
        assert.strictEqual(simple_statistics.average([1, 2, 3, 4, 5]), 3);
        assert.strictEqual(simple_statistics.average([-5, 5]), 0);
        assert.strictEqual(simple_statistics.average([1.5, 2.5]), 2);

        // Edge case: empty array should throw
        assert.throws(
            () => simple_statistics.average([]),
            /mean requires at least one data point/
        );

        done();
    });
});