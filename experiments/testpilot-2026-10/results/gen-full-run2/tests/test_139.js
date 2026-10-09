let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.cumulativeStdNormalProbability', function(done) {
        const epsilon = 1e-7;

        // z = 0 should return 0.5
        let result = simple_statistics.cumulativeStdNormalProbability(0);
        assert.ok(Math.abs(result - 0.5) < epsilon, `cumulativeStdNormalProbability(0) = ${result}, expected 0.5`);

        // z = 1 should be approximately 0.841344746
        result = simple_statistics.cumulativeStdNormalProbability(1);
        const expectedPos = 0.8413447460685429;
        assert.ok(Math.abs(result - expectedPos) < epsilon, `cumulativeStdNormalProbability(1) = ${result}, expected ${expectedPos}`);

        // z = -1 should be approximately 0.158655254
        result = simple_statistics.cumulativeStdNormalProbability(-1);
        const expectedNeg = 0.15865525393145707;
        assert.ok(Math.abs(result - expectedNeg) < epsilon, `cumulativeStdNormalProbability(-1) = ${result}, expected ${expectedNeg}`);

        done();
    });
});