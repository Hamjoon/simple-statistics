let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.erf', function(done) {
        const epsilon = 1e-7;
        const testCases = [
            { x: 0,   expected: 0 },
            { x: 0.5, expected: 0.5204998778130465 },
            { x: 1,   expected: 0.8427007929497149 },
            { x: -0.5,expected: -0.5204998778130465 },
            { x: -1,  expected: -0.8427007929497149 },
            { x: 2,   expected: 0.9953222650189527 },
            { x: -2,  expected: -0.9953222650189527 }
        ];

        testCases.forEach(({x, expected}) => {
            const result = simple_statistics.erf(x);
            assert.ok(
                Math.abs(result - expected) < epsilon,
                `erf(${x}) = ${result}, expected ${expected}`
            );
        });

        // Extreme values should approach ±1
        assert.ok(simple_statistics.erf(10) > 0.999999, 'erf(10) should be close to 1');
        assert.ok(simple_statistics.erf(-10) < -0.999999, 'erf(-10) should be close to -1');

        done();
    });
});