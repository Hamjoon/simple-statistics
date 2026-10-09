let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.rSquared', function(done) {
        // 1. Perfect fit should return 1
        const perfect = [[0, 0], [1, 1], [2, 2]];
        const identity = x => x; // f(x) = x
        assert.strictEqual(simple_statistics.rSquared(perfect, identity), 1);

        // 2. Another perfect fit (different slope) should also return 1
        const perfect2 = [[0, 0], [1, 2], [2, 4]];
        const double = x => 2 * x; // f(x) = 2x
        assert.strictEqual(simple_statistics.rSquared(perfect2, double), 1);

        // 3. Imperfect fit – compare against a manually‑computed value
        const imperfect = [[0, 0], [1, 2], [2, 4]];
        const slope15 = x => 1.5 * x; // f(x) = 1.5x
        const r2 = simple_statistics.rSquared(imperfect, slope15);
        // Expected r² = 1 - err / sumOfSquares = 0.84375
        const expected = 0.84375;
        const tolerance = 1e-10;
        assert.ok(Math.abs(r2 - expected) < tolerance,
            `Expected r² ≈ ${expected}, got ${r2}`);

        // 4. Edge case: less than two points should return 1
        const single = [[5, 10]];
        const anyFunc = () => 0;
        assert.strictEqual(simple_statistics.rSquared(single, anyFunc), 1);

        done();
    });
});