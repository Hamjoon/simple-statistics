let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantile', function(done) {
        // Basic quantile checks on an odd‑length sorted array
        const arr = [1, 2, 3, 4, 5];
        assert.strictEqual(simple_statistics.quantile(arr, 0.5), 3);   // median
        assert.strictEqual(simple_statistics.quantile(arr, 0.25), 2);  // first quartile
        assert.strictEqual(simple_statistics.quantile(arr, 0.75), 4);  // third quartile

        // Interpolation case: quantile should be halfway between 0 and 10
        const arr2 = [0, 10];
        const q = simple_statistics.quantile(arr2, 0.5);
        assert.ok(Math.abs(q - 5) < 1e-12, `Expected 5, got ${q}`);

        done();
    });
});