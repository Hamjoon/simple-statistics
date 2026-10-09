let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combinations', function(done) {
        // Basic binomial coefficient cases
        assert.strictEqual(simple_statistics.combinations(5, 3), 10);
        assert.strictEqual(simple_statistics.combinations(0, 0), 1);
        assert.strictEqual(simple_statistics.combinations(5, 0), 1);
        assert.strictEqual(simple_statistics.combinations(5, 5), 1);
        // k > n should yield 0
        assert.strictEqual(simple_statistics.combinations(5, 6), 0);
        // Larger numbers
        assert.strictEqual(simple_statistics.combinations(10, 4), 210);
        // Symmetry property: C(n, k) === C(n, n‑k)
        assert.strictEqual(simple_statistics.combinations(10, 4), simple_statistics.combinations(10, 6));
        done();
    });
});