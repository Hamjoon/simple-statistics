let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.variance', function(done) {
        // Normal case – compare against known value
        const data = [1, 2, 3, 4, 5, 6];
        const expected = 2.9166666666666665;
        const result = simple_statistics.variance(data);
        const epsilon = 1e-12;
        assert.ok(Math.abs(result - expected) < epsilon, `Expected ${expected}, got ${result}`);

        // All identical values should give variance 0
        assert.strictEqual(simple_statistics.variance([7, 7, 7]), 0);

        // Empty array should throw an Error
        assert.throws(() => simple_statistics.variance([]), Error);

        done();
    });
});