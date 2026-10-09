let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.gammaln', function(done) {
        // Known values from the documentation / reference implementation
        const tests = [
            { input: 500, expected: 2605.1158503617335 },
            { input: 2.4, expected: 0.21685932244884043 }
        ];

        const tolerance = 1e-12; // acceptable numerical error

        tests.forEach(({input, expected}) => {
            const result = simple_statistics.gammaln(input);
            const diff = Math.abs(result - expected);
            assert.ok(diff < tolerance, `gammaln(${input}) ≈ ${expected}, got ${result}`);
        });

        // Edge case: non‑positive input should return Infinity
        assert.strictEqual(simple_statistics.gammaln(0), Infinity);
        assert.strictEqual(simple_statistics.gammaln(-5), Infinity);

        done();
    });
});