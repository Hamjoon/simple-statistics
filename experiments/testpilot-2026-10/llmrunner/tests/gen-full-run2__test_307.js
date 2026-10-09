let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.minSorted', function(done) {
        const testCases = [
            { input: [-100, -10, 1, 2, 5], expected: -100 },
            { input: [0, 1, 2, 3], expected: 0 },
            { input: [5], expected: 5 },
            { input: [-5, -4, -3, -2, -1], expected: -5 }
        ];

        testCases.forEach(({ input, expected }) => {
            const result = simple_statistics.minSorted(input);
            assert.strictEqual(result, expected, `minSorted(${JSON.stringify(input)}) should be ${expected}`);
        });

        done();
    });
});