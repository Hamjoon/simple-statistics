let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.sum', function (done) {
        // Basic integer sum
        assert.strictEqual(simple_statistics.sum([1, 2, 3, 4]), 10);

        // Sum with negative numbers
        assert.strictEqual(simple_statistics.sum([-1, -2, -3]), -6);

        // Sum with floating point numbers (use tolerance instead of strict equality)
        const floatSum = simple_statistics.sum([0.1, 0.2, 0.3]);
        const expectedFloatSum = 0.6000000000000001; // the mathematically correct JS result
        const epsilon = 1e-12; // tolerance
        assert.ok(Math.abs(floatSum - expectedFloatSum) < epsilon,
            `Expected sum to be close to ${expectedFloatSum}, but got ${floatSum}`);

        // Sum of an empty array should be 0
        assert.strictEqual(simple_statistics.sum([]), 0);

        done();
    });
});