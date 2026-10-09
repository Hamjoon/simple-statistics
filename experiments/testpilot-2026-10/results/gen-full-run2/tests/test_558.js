let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.uniqueCountSorted', function(done) {
        const testCases = [
            { input: [], expected: 0 },
            { input: [1], expected: 1 },
            { input: [1, 1, 1], expected: 1 },
            { input: [1, 2, 3], expected: 3 },
            { input: [1, 1, 2, 2, 3, 3, 3], expected: 3 },
            { input: ['a', 'a', 'b', 'c', 'c'], expected: 3 },
            { input: [null, null, undefined, undefined], expected: 2 } // null !== undefined
        ];

        testCases.forEach(({ input, expected }) => {
            const result = simple_statistics.uniqueCountSorted(input);
            assert.strictEqual(result, expected, `uniqueCountSorted(${JSON.stringify(input)}) should be ${expected}`);
        });

        done();
    });
});