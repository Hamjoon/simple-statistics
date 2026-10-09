let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.linearRegression', function(done) {
        // Test with multiple points that form a perfect line y = x
        const data1 = [[0, 0], [1, 1], [2, 2]];
        const result1 = simple_statistics.linearRegression(data1);
        assert.strictEqual(result1.m, 1, 'Slope should be 1 for y = x');
        assert.strictEqual(result1.b, 0, 'Intercept should be 0 for y = x');

        // Test with a single point – slope should be 0 and intercept should be the y value
        const data2 = [[5, 10]];
        const result2 = simple_statistics.linearRegression(data2);
        assert.strictEqual(result2.m, 0, 'Slope should be 0 for a single point');
        assert.strictEqual(result2.b, 10, 'Intercept should equal the y value of the single point');

        done();
    });
});