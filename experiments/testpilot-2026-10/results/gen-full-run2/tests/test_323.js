let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.modeSorted', function(done) {
        // basic case
        assert.strictEqual(simple_statistics.modeSorted([0, 0, 1]), 0);
        // tie case – most recent mode should win
        assert.strictEqual(simple_statistics.modeSorted([1, 1, 2, 2]), 2);
        // single element list
        assert.strictEqual(simple_statistics.modeSorted([5]), 5);
        // empty array should throw
        assert.throws(() => simple_statistics.modeSorted([]), /mode requires at least one data point/);
        done();
    });
});