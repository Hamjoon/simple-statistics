let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.bisect', function(done) {
        // Verify that bisect finds the root of cos(x) between 0 and 4
        const f = Math.cos;
        const approxRoot = simple_statistics.bisect(f, 0, 4, 100, 0.003);
        // The true root is π/2 ≈ 1.570796...
        assert.ok(Math.abs(approxRoot - Math.PI / 2) < 0.003,
            `Expected root near ${Math.PI / 2}, got ${approxRoot}`);

        // Verify that passing a non‑function throws a TypeError
        assert.throws(() => {
            simple_statistics.bisect(42, 0, 1, 10, 0.001);
        }, TypeError, 'Did not throw TypeError for non‑function argument');

        done();
    });
});