let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.averageSimple', function(done) {
        // Basic case
        let arr1 = [1, 2, 3, 4];
        let avg1 = simple_statistics.averageSimple(arr1);
        assert.strictEqual(avg1, 2.5, 'average of [1,2,3,4] should be 2.5');

        // Mixed positive and negative numbers
        let arr2 = [-5, 0, 5, 10];
        let avg2 = simple_statistics.averageSimple(arr2);
        assert.strictEqual(avg2, 2.5, 'average of [-5,0,5,10] should be 2.5');

        // All same values
        let arr3 = [7, 7, 7, 7];
        let avg3 = simple_statistics.averageSimple(arr3);
        assert.strictEqual(avg3, 7, 'average of [7,7,7,7] should be 7');

        // Single element array
        let arr4 = [42];
        let avg4 = simple_statistics.averageSimple(arr4);
        assert.strictEqual(avg4, 42, 'average of [42] should be 42');

        // Empty array should return NaN
        let arr5 = [];
        let avg5 = simple_statistics.averageSimple(arr5);
        assert.ok(Number.isNaN(avg5), 'average of [] should be NaN');

        done();
    });
});