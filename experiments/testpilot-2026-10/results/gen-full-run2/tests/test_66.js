let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.bisect', function(done) {
        // 1. Normal convergence to a known root
        const f = x => x * x - 4; // root at x = 2
        const root = simple_statistics.bisect(f, 0, 5, 100, 1e-7);
        assert.ok(Math.abs(root - 2) < 1e-6, 'Root should be close to 2');

        // 2. Early exit when error tolerance is large
        const g = x => x - 10; // root at x = 10
        // tolerance (15) > (end-start)/2 (10) → should return the midpoint immediately
        const midpoint = simple_statistics.bisect(g, 0, 20, 10, 15);
        assert.strictEqual(midpoint, 10, 'Should return midpoint when tolerance is large');

        // 3. TypeError when the first argument is not a function
        assert.throws(() => {
            simple_statistics.bisect(42, 0, 1, 10, 0.001);
        }, TypeError, 'Non‑function argument should throw TypeError');

        // 4. Error when maximum iterations are exceeded
        const h = x => 1; // never zero, same sign at both ends
        assert.throws(() => {
            simple_statistics.bisect(h, -1, 1, 5, 1e-12);
        }, /maximum number of iterations exceeded/, 'Should throw when iteration limit is hit');

        done();
    });
});