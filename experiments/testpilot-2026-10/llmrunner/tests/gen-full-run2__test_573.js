let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.zScore', function(done) {
        // Normal cases
        const cases = [
            { x: 10, mean: 5, sd: 2, expected: 2.5 },
            { x: 0,  mean: 0, sd: 1, expected: 0 },
            { x: -5, mean: -10, sd: 5, expected: 1 },
            { x: 5,  mean: 5, sd: 0.5, expected: 0 }
        ];
        cases.forEach(c => {
            const result = simple_statistics.zScore(c.x, c.mean, c.sd);
            assert.strictEqual(result, c.expected);
        });

        // Edge case: division by zero should produce Infinity (or -Infinity)
        assert.strictEqual(simple_statistics.zScore(1, 0, 0), Infinity);
        assert.strictEqual(simple_statistics.zScore(-1, 0, 0), -Infinity);

        done();
    });
});