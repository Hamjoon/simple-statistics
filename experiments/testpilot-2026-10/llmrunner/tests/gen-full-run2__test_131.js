let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.cumulativeStdLogisticProbability', function(done) {
        const tol = 1e-12;

        // x = 0 should be exactly 0.5
        assert.strictEqual(simple_statistics.cumulativeStdLogisticProbability(0), 0.5);

        // Verify against the direct formula for a few values
        const testValues = [ -3, -1, 1, 2, 5 ];
        testValues.forEach(x => {
            const result = simple_statistics.cumulativeStdLogisticProbability(x);
            const expected = 1 / (Math.exp(-x) + 1);
            assert.ok(Math.abs(result - expected) < tol, `Failed at x=${x}`);
        });

        // Symmetry: f(-x) = 1 - f(x)
        const symX = 1.234567;
        const fPos = simple_statistics.cumulativeStdLogisticProbability(symX);
        const fNeg = simple_statistics.cumulativeStdLogisticProbability(-symX);
        assert.ok(Math.abs(fPos + fNeg - 1) < tol, 'Symmetry test failed');

        // Extreme values approach limits
        assert.ok(simple_statistics.cumulativeStdLogisticProbability(20) > 0.999999, 'Upper limit failed');
        assert.ok(simple_statistics.cumulativeStdLogisticProbability(-20) < 0.000001, 'Lower limit failed');

        done();
    });
});