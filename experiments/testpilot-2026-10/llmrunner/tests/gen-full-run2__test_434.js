let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.rSquared', function(done) {
        // Case 1: less than two points should return 1
        const singlePoint = [[0, 5]];
        const r1 = simple_statistics.rSquared(singlePoint, x => x);
        assert.strictEqual(r1, 1, 'rSquared should be 1 for a single data point');

        // Case 2: perfect linear relationship should return 1
        const perfectLine = [
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 3]
        ];
        const identity = x => x; // y = x
        const r2 = simple_statistics.rSquared(perfectLine, identity);
        assert.strictEqual(r2, 1, 'rSquared should be 1 for a perfect fit');

        // Case 3: a terrible fit should produce a negative R²
        // Data points follow y = 2x, but we predict y = 0
        const badFit = [
            [0, 0],
            [1, 2],
            [2, 4]
        ];
        const zeroFunc = x => 0;
        const r3 = simple_statistics.rSquared(badFit, zeroFunc);
        // Expected calculation:
        // average = (0+2+4)/3 = 2
        // sumOfSquares = (2-0)^2 + (2-2)^2 + (2-4)^2 = 4 + 0 + 4 = 8
        // err = (0-0)^2 + (2-0)^2 + (4-0)^2 = 0 + 4 + 16 = 20
        // r² = 1 - err / sumOfSquares = 1 - 20/8 = -1.5
        assert.strictEqual(r3, -1.5, 'rSquared should be -1.5 for the given bad fit');

        done();
    });
});