let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.erf', function(done) {
        // Known values for the error function (source: mathematical tables)
        const testCases = [
            { x: 0, expected: 0 },
            { x: 0.5, expected: 0.5204998778130465 },
            { x: -0.5, expected: -0.5204998778130465 },
            { x: 1, expected: 0.8427007929497149 },
            { x: -1, expected: -0.8427007929497149 },
            { x: 2, expected: 0.9953222650189527 },
            { x: -2, expected: -0.9953222650189527 },
            { x: 3, expected: 0.9999779095030014 },
            { x: -3, expected: -0.9999779095030014 },
            { x: 10, expected: 1 },   // erf(large positive) ≈ 1
            { x: -10, expected: -1 }  // erf(large negative) ≈ -1
        ];
        const tolerance = 1e-7;
        testCases.forEach(({x, expected}) => {
            const result = simple_statistics.erf(x);
            // For extreme values, clamp expected to exactly 1 or -1 to avoid floating‑point noise
            const exp = Math.abs(expected) === 1 ? expected : expected;
            assert.ok(Math.abs(result - exp) <= tolerance,
                `erf(${x}) = ${result}, expected ${exp} within tolerance ${tolerance}`);
        });
        done();
    });
});