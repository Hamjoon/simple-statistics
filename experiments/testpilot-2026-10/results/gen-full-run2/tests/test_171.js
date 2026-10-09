let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.gamma', function(done) {
        const gamma = simple_statistics.gamma;

        // Integer argument: gamma(5) == 4! == 24
        assert.strictEqual(gamma(5), 24);

        // Positive non‑integer argument
        const valPos = gamma(11.5);
        const expPos = 11899423.084037038;
        // relative tolerance of 1e-12
        assert.ok(Math.abs(valPos - expPos) / expPos < 1e-12);

        // Negative non‑integer argument (uses reflection formula)
        const valNeg = gamma(-11.5);
        const expNeg = 2.29575810481609e-8;
        assert.ok(Math.abs(valNeg - expNeg) / expNeg < 1e-12);

        // Zero and negative integers should return NaN
        assert.ok(isNaN(gamma(0)));
        assert.ok(isNaN(gamma(-3)));

        done();
    });
});