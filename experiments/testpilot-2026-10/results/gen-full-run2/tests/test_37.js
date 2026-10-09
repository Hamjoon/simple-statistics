let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.addToMean', function(done) {
        // Example from the documentation
        const result1 = simple_statistics.addToMean(14, 5, 53);
        assert.strictEqual(result1, 20.5, 'addToMean(14,5,53) should be 20.5');

        // Adding to an empty list (n = 0)
        const result2 = simple_statistics.addToMean(0, 0, 10);
        assert.strictEqual(result2, 10, 'addToMean(0,0,10) should be 10');

        // Adding a value that is lower than the current mean
        const result3 = simple_statistics.addToMean(100, 4, 80);
        // Expected: 100 + (80 - 100) / (4 + 1) = 100 - 20/5 = 96
        assert.strictEqual(result3, 96, 'addToMean(100,4,80) should be 96');

        // Adding a negative value
        const result4 = simple_statistics.addToMean(-5, 2, -15);
        // Expected: -5 + (-15 + 5) / 3 = -5 + (-10)/3 = -5 - 3.333... = -8.333...
        const expected4 = -5 + (-15 - (-5)) / (2 + 1);
        assert.strictEqual(result4, expected4, 'addToMean(-5,2,-15) should match calculated value');

        done();
    });
});