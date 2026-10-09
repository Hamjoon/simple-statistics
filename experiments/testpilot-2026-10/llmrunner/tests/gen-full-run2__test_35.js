let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.addToMean', function(done) {
        // Example 1: simple integer values
        let mean1 = 5;      // current mean of 2 numbers (e.g., [4,6])
        let n1 = 2;         // number of existing observations
        let newValue1 = 10; // new observation to add
        let result1 = simple_statistics.addToMean(mean1, n1, newValue1);
        let expected1 = (mean1 * n1 + newValue1) / (n1 + 1);
        assert.strictEqual(result1, expected1);

        // Example 2: floating point values
        let mean2 = 2.5;    // mean of 4 numbers
        let n2 = 4;
        let newValue2 = 3.7;
        let result2 = simple_statistics.addToMean(mean2, n2, newValue2);
        let expected2 = (mean2 * n2 + newValue2) / (n2 + 1);
        // Use a tolerance for floating point comparison
        assert.ok(Math.abs(result2 - expected2) < 1e-12, `Expected ${expected2}, got ${result2}`);

        // Example 3: adding to an empty set (n = 0)
        let mean3 = 0;      // mean is irrelevant when n = 0
        let n3 = 0;
        let newValue3 = 7;
        let result3 = simple_statistics.addToMean(mean3, n3, newValue3);
        let expected3 = newValue3; // the mean of a single-element set is the element itself
        assert.strictEqual(result3, expected3);

        done();
    });
});