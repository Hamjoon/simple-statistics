let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sumSimple', function(done) {
        // Normal case
        assert.strictEqual(simple_statistics.sumSimple([1, 2, 3]), 6);
        // Empty array should return 0
        assert.strictEqual(simple_statistics.sumSimple([]), 0);
        // Array with a non-number should return NaN
        const result = simple_statistics.sumSimple([1, "a", 3]);
        assert.ok(Number.isNaN(result), 'Expected NaN when array contains non-number');
        done();
    });
});