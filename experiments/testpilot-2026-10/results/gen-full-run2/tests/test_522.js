let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.standardDeviation', function(done) {
        // Known dataset from standard deviation examples
        const data = [2, 4, 4, 4, 5, 5, 7, 9];
        const expected = 2.138089935299395; // sample standard deviation
        const result = simple_statistics.standardDeviation(data);
        // Allow a tiny floating‑point tolerance
        assert.ok(Math.abs(result - expected) < 1e-12, `Expected ${expected}, got ${result}`);

        // Edge case: single element array should return 0
        assert.strictEqual(simple_statistics.standardDeviation([5]), 0, 'Std dev of single element should be 0');

        done();
    });
});