let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.factorial', function(done) {
        // Valid inputs
        assert.strictEqual(simple_statistics.factorial(1), 1, '1! should be 1');
        assert.strictEqual(simple_statistics.factorial(5), 120, '5! should be 120');
        assert.strictEqual(simple_statistics.factorial(10), 3628800, '10! should be 3628800');

        // Invalid inputs – should throw
        assert.throws(() => simple_statistics.factorial(-3), /Error/, 'Negative input should throw');
        assert.throws(() => simple_statistics.factorial(2.5), /Error/, 'Non‑integer input should throw');
        assert.throws(() => simple_statistics.factorial('5'), /Error/, 'Non‑number input should throw');

        done();
    });
});