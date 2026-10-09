let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sumSimple', function(done) {
        // Normal numeric array
        assert.strictEqual(simple_statistics.sumSimple([1, 2, 3]), 6);
        // Empty array should sum to 0
        assert.strictEqual(simple_statistics.sumSimple([]), 0);
        // Array with negative numbers
        assert.strictEqual(simple_statistics.sumSimple([-1, -2, 3]), 0);
        // Non‑numeric element should cause NaN
        const result = simple_statistics.sumSimple([1, "2", 3]);
        assert.ok(Number.isNaN(result));
        done();
    });
});