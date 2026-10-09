let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.bisect', function(done) {
        // 1. Verify a correct root approximation (cos(x) = 0 near π/2)
        const approxRoot = simple_statistics.bisect(Math.cos, 0, 4, 100, 0.001);
        assert.ok(
            Math.abs(approxRoot - Math.PI / 2) < 0.01,
            `Expected root near ${Math.PI / 2}, got ${approxRoot}`
        );

        // 2. Verify that a non‑function argument throws a TypeError
        assert.throws(
            () => simple_statistics.bisect(123, 0, 1, 10, 0.1),
            TypeError,
            'Did not throw TypeError for non‑function argument'
        );

        // 3. Verify that exceeding maxIterations throws the expected error
        assert.throws(
            () => simple_statistics.bisect(x => x + 1, 0, 1, 10, 0.0001),
            /maximum number of iterations exceeded/,
            'Did not throw error when max iterations are exceeded'
        );

        done();
    });
});