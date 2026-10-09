let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.gammaln', function(done) {
        const gammaln = simple_statistics.gammaln;

        // Values outside the domain should return Infinity
        assert.strictEqual(gammaln(0), Infinity);
        assert.strictEqual(gammaln(-3), Infinity);

        // Known values of ln(Gamma(n)) for positive n
        const testCases = [
            [1, 0],                                 // ln(Gamma(1)) = ln(1) = 0
            [2, 0],                                 // ln(Gamma(2)) = ln(1) = 0
            [3, Math.log(2)],                       // ln(Gamma(3)) = ln(2) ≈ 0.693147
            [5, Math.log(24)],                      // ln(Gamma(5)) = ln(4!) = ln(24) ≈ 3.178054
            [10, Math.log(362880)]                  // ln(Gamma(10)) = ln(9!) = ln(362880) ≈ 12.801827
        ];

        const tolerance = 1e-6;
        testCases.forEach(([n, expected]) => {
            const result = gammaln(n);
            assert.ok(
                Math.abs(result - expected) < tolerance,
                `gammaln(${n}) = ${result}, expected ≈ ${expected}`
            );
        });

        done();
    });
});