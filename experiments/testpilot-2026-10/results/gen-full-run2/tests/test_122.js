let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combineMeans', function(done) {
        // Basic example from the documentation
        let result = simple_statistics.combineMeans(5, 3, 4, 3);
        assert.strictEqual(result, 4.5, 'combineMeans(5,3,4,3) should be 4.5');

        // When one list is empty, the result should be the mean of the non‑empty list
        result = simple_statistics.combineMeans(0, 0, 7, 4);
        assert.strictEqual(result, 7, 'combineMeans with first list empty should return second mean');

        result = simple_statistics.combineMeans(10, 5, 0, 0);
        assert.strictEqual(result, 10, 'combineMeans with second list empty should return first mean');

        // Test with negative numbers
        result = simple_statistics.combineMeans(-2, 2, 4, 2);
        // Expected: ((-2)*2 + 4*2) / (2+2) = ( -4 + 8 ) / 4 = 1
        assert.strictEqual(result, 1, 'combineMeans with negative and positive values should be correct');

        // Test with floating point numbers (use tolerance)
        result = simple_statistics.combineMeans(1.5, 2, 2.5, 2);
        // Expected: ((1.5*2)+(2.5*2))/4 = (3+5)/4 = 2
        const expected = 2;
        const tolerance = 1e-12;
        assert.ok(Math.abs(result - expected) < tolerance, 'combineMeans with floats should be within tolerance');

        done();
    });
});