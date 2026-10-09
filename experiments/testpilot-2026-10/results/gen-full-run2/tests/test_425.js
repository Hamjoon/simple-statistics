let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileSorted', function(done) {
        // Sample sorted data
        const x = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];

        // Basic quantiles
        assert.strictEqual(simple_statistics.quantileSorted(x, 0.5), 9);
        assert.strictEqual(simple_statistics.quantileSorted(x, 0), 3);
        assert.strictEqual(simple_statistics.quantileSorted(x, 1), 20);

        // Interpolated quantile (p = 0.25)
        // h = (n - 1) * p = 10 * 0.25 = 2.5
        // lower = 2, upper = 3, value = x[2] + (x[3] - x[2]) * 0.5 = 7 + (8 - 7) * 0.5 = 7.5
        assert.strictEqual(simple_statistics.quantileSorted(x, 0.25), 7.5);

        // Error handling: empty array
        assert.throws(() => simple_statistics.quantileSorted([], 0.5), /Error/);

        // Error handling: p out of range
        assert.throws(() => simple_statistics.quantileSorted(x, -0.1), /Error/);
        assert.throws(() => simple_statistics.quantileSorted(x, 1.1), /Error/);

        done();
    });
});