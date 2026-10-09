let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.chiSquaredGoodnessOfFit', function(done) {
        // A simple uniform distribution over the values 0‑3
        function uniformDist(mean) {
            // ignore the estimated mean – return equal probabilities
            return {0: 0.25, 1: 0.25, 2: 0.25, 3: 0.25};
        }

        // 1️⃣ Data that perfectly matches the hypothesised distribution
        const dataMatch = [0, 1, 2, 3];
        const resultMatch = simple_statistics.chiSquaredGoodnessOfF    })
})