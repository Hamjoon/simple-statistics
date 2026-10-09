let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.factorial', function(done) {
        // Valid inputs
        assert.strictEqual(simple_statistics.factorial(0), 1);
        assert.strictEqual(simple_statistics.factorial(1), 1);
        assert.strictEqual(simple_statistics.factorial(5), 120);
        assert.strictEqual(simple_statistics.factorial(10), 3628800);

        // Invalid inputs – negative number
        assert.throws(
            () => simple_statistics.factorial(-1),
            /factorial requires a non-negative value/
        );

        // Invalid inputs – non‑integer
        assert.throws(
            () => simple_statistics.factorial(3.5),
            /factorial requires an integer input/
        );

        done();
    });
});