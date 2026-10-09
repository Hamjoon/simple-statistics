let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.relativeError', function(done) {
        // Basic cases
        const cases = [
            { actual: 0, expected: 0, result: 0 },
            { actual: 5, expected: 10, result: 0.5 },
            { actual: -5, expected: 10, result: 1.5 },
            { actual: 10, expected: -10, result: 2 },
            { actual: 0, expected: 5, result: 1 }
        ];

        cases.forEach(c => {
            const r = simple_statistics.relativeError(c.actual, c.expected);
            assert.strictEqual(r, c.result);
        });

        // When expected is zero but actual is not, the function should return Infinity
        assert.strictEqual(simple_statistics.relativeError(5, 0), Infinity);

        done();
    });
});