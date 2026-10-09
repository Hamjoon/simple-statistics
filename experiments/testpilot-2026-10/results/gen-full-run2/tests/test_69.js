let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.chiSquaredGoodnessOfFit', function(done) {
        // Simple data that matches a uniform distribution over {0,1}
        const data = [0, 1, 0, 1];
        // Distribution function returning the expected probability for each possible value
        const distribution = function (x) {
            if (x === 0 || x === 1) return 0.5;
            return 0;
        };
        const significance = 0.05; // typical 5% significance level

        const result = simple_statistics.chiSquaredGoodnessOfF    })
})