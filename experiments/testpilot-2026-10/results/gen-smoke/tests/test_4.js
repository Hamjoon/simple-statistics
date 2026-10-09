let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.average', function (done) {
        // Basic functionality
        assert.strictEqual(simple_statistics.average([1, 2, 3]), 2);
        assert.strictEqual(simple_statistics.average([5]), 5);
        assert.strictEqual(simple_statistics.average([-1, 1]), 0);

        // Floating‑point comparison – allow a tiny tolerance
        const avg01 = simple_statistics.average([0.1, 0.2]);
        const expected = 0.15;
        const epsilon = 1e-12;               // tolerance
        assert.ok(Math.abs(avg01 - expected) < epsilon,
            `average([0.1,0.2]) expected ${expected} but got ${avg01}`);

        // Edge case: empty array should return NaN
        assert.ok(isNaN(simple_statistics.average([])));
        done();
    });
});