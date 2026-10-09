let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sumSimple', function(done) {
        // Empty array should sum to 0
        assert.strictEqual(simple_statistics.sumSimple([]), 0);
        // Basic positive numbers
        assert.strictEqual(simple_statistics.sumSimple([1, 2, 3, 4]), 10);
        // Mix of negative and positive numbers
        assert.strictEqual(simple_statistics.sumSimple([-1, -2, 3]), 0);
        // Floating point numbers
        assert.strictEqual(simple_statistics.sumSimple([0.5, 1.5]), 2);
        done();
    });
});