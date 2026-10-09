let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.inverseErrorFunction', function(done) {
        const eps = 1e-7;

        // 1. Inverse of erf(0) should be 0
        assert.strictEqual(simple_statistics.inverseErrorFunction(0), 0);

        // 2. Known value: erf(1) ≈ 0.8427007929497149, so inverse should be ~1
        const erfOfOne = 0.8427007929497149;
        const invOne = simple_statistics.inverseErrorFunction(erfOfOne);
        assert.ok(Math.abs(invOne - 1) < eps, `inverseErrorFunction(${erfOfOne}) ≈ 1, got ${invOne}`);

        // 3. Symmetry: inverseErrorFunction(-x) = -inverseErrorFunction(x)
        const x = 0.5;
        const invPos = simple_statistics.inverseErrorFunction(x);
        const invNeg = simple_statistics.inverseErrorFunction(-x);
        assert.ok(Math.abs(invPos + invNeg) < eps, `symmetry failed for x=${x}: ${invPos} vs ${invNeg}`);

        done();
    });
});