let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.gamma', function(done) {
        // Integer arguments: gamma(n) = (n-1)!
        assert.strictEqual(simple_statistics.gamma(1), 1);
        assert.strictEqual(simple_statistics.gamma(2), 1);
        assert.strictEqual(simple_statistics.gamma(3), 2);
        assert.strictEqual(simple_statistics.gamma(4), 6);
        assert.strictEqual(simple_statistics.gamma(5), 24);

        // Non‑integer argument: gamma(0.5) = sqrt(pi)
        const expected = Math.sqrt(Math.PI);
        const result = simple_statistics.gamma(0.5);
        const tolerance = 1e-12;
        assert.ok(Math.abs(result - expected) < tolerance, `gamma(0.5) ≈ ${expected}, got ${result}`);

        done();
    });
});