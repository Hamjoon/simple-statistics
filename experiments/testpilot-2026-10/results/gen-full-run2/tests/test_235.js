let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.logAverage', function(done) {
        // Normal case: geometric mean of [1,2,3,4]
        const data = [1, 2, 3, 4];
        const result = simple_statistics.logAverage(data);
        const expected = Math.pow(1 * 2 * 3 * 4, 1 / data.length);
        // Allow a tiny tolerance for floating‑point differences
        assert.ok(Math.abs(result - expected) < 1e-12, `Expected ${expected}, got ${result}`);

        // Empty array should throw an Error
        assert.throws(() => simple_statistics.logAverage([]), /Error/);

        // Array containing a negative number should throw an Error
        assert.throws(() => simple_statistics.logAverage([-5, 2, 3]), /Error/);

        done();
    });
});