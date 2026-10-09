let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.poissonDistribution', function(done) {
        const lambda = 3.5;
        const poisson = simple_statistics.poissonDistribution(lambda);

        function factorial(n) {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }

        const tolerance = 1e-12;
        for (let k = 0; k <= 5; k++) {
            const expected = Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
            const actual = poisson(k);
            assert.ok(
                Math.abs(actual - expected) < tolerance,
                `Poisson probability mismatch for k=${k}: expected ${expected}, got ${actual}`
            );
        }
        done();
    });
});