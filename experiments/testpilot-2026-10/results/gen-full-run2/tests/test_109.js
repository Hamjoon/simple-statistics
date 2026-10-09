let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.coefficientOfVariation', function(done) {
        const testCases = [
            { input: [1, 2, 3, 4],          expected: 0.516 },
            { input: [1, 2, 3, 4, 5],       expected: 0.527 },
            { input: [-1, 0, 1, 2, 3, 4],   expected: 1.247 }
        ];

        testCases.forEach(({input, expected}) => {
            const result = simple_statistics.coefficientOfVariation(input);
            // Round to three decimal places to match the examples
            const rounded = Number(result.toFixed(3));
            assert.strictEqual(rounded, expected);
        });

        done();
    });
});