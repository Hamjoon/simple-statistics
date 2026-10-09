let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.gammaln', function(done) {
        const epsilon = 1e-12;
        const cases = [
            { n: 500,   expected: 2605.1158503617335 },
            { n: 2.4,   expected: 0.21685932244884043 },
            { n: 1,     expected: 0 },                     // ln(gamma(1)) = ln(1) = 0
            { n: 0.5,   expected: 0.5723649429247001 }    // ln(gamma(0.5)) = ln(sqrt(pi))
        ];

        cases.forEach(({n, expected}) => {
            const result = simple_statistics.gammaln(n);
            assert.ok(
                Math.abs(result - expected) < epsilon,
                `gammaln(${n}) expected ${expected} but got ${result}`
            );
        });

        done();
    });
});