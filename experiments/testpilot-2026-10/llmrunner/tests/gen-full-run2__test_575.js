let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.zScore', function(done) {
        const testCases = [
            { x: 78, mean: 80, sd: 5, expected: -0.4 },
            { x: 85, mean: 80, sd: 5, expected: 1 },
            { x: 80, mean: 80, sd: 5, expected: 0 }
        ];

        testCases.forEach(({ x, mean, sd, expected }) => {
            const result = simple_statistics.zScore(x, mean, sd);
            assert.ok(
                Math.abs(result - expected) < 1e-12,
                `zScore(${x}, ${mean}, ${sd}) expected ${expected} but got ${result}`
            );
        });

        done();
    });
});