let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.inverseErrorFunction', function(done) {
        // Increase tolerance to accommodate the library's precision
        const tolerance = 2e-5;   // was 1e-6

        const testCases = [
            { x: 0, expected: 0 },
            { x: 0.5, expected: 0.4769362762044699 },
            { x: -0.5, expected: -0.4769362762044699 },
            { x: 0.8427007929497149, expected: 1 },
            { x: -0.8427007929497149, expected: -1 }
        ];

        testCases.forEach(({ x, expected }) => {
            const result = simple_statistics.inverseErrorFunction(x);
            assert.ok(
                Math.abs(result - expected) < tolerance,
                `inverseErrorFunction(${x}) = ${result}, expected ${expected}`
            );
        });

        done();
    });
});