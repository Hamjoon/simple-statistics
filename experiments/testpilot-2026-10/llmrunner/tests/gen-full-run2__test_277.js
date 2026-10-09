let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.mad', function(done) {
        const epsilon = 1e-12;
        const approxEqual = (a, b) => Math.abs(a - b) < epsilon;

        // 1. Odd length array
        const arr1 = [1, 2, 3, 4, 5];
        // median = 3, deviations = [2,1,0,1,2] → median deviation = 1
        const expected1 = 1;
        const result1 = simple_statistics.mad(arr1);
        assert.ok(approxEqual(result1, expected1), `mad(${arr1}) = ${result1}, expected ${expected1}`);

        // 2. Even length array
        const arr2 = [10, 2, 38, 23, 38, 23, 21];
        // median = 23, deviations = [13,21,15,0,15,0,2] → sorted = [0,0,2,13,15,15,21] → median = 13
        const expected2 = 13;
        const result2 = simple_statistics.mad(arr2);
        assert.ok(approxEqual(result2, expected2), `mad(${arr2}) = ${result2}, expected ${expected2}`);

        // 3. Array with negative numbers
        const arr3 = [-5, -1, -3, -2, -4];
        // median = -3, deviations = [2,2,0,1,1] → median deviation = 1
        const expected3 = 1;
        const result3 = simple_statistics.mad(arr3);
        assert.ok(approxEqual(result3, expected3), `mad(${arr3}) = ${result3}, expected ${expected3}`);

        // 4. All identical values
        const arr4 = [7, 7, 7, 7];
        // median = 7, deviations = [0,0,0,0] → median deviation = 0
        const expected4 = 0;
        const result4 = simple_statistics.mad(arr4);
        assert.ok(approxEqual(result4, expected4), `mad(${arr4}) = ${result4}, expected ${expected4}`);

        done();
    });
});