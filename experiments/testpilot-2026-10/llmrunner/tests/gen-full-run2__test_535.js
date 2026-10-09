let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sum', function(done) {
        // Integer array – exact result
        assert.strictEqual(simple_statistics.sum([1, 2, 3]), 6);

        // Floating‑point array – verify the Kahan‑Babuška algorithm improves precision
        const result = simple_statistics.sum([0.1, 0.2, 0.3]);
        const expected = 0.6;
        assert.ok(Math.abs(result - expected) < 1e-12, `Expected ${expected}, got ${result}`);

        done();
    });
});