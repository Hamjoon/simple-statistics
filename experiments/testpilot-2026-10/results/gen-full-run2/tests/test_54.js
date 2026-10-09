let mocha = require('mocha');
let assert = require('assert');
let ss = require('simple-statistics');   // alias for brevity

describe('test simple-statistics', function () {
    it('test simple-statistics.meanSimple', function (done) {
        // Basic case
        let arr1 = [1, 2, 3, 4];
        let avg1 = ss.meanSimple(arr1);
        assert.strictEqual(avg1, 2.5, 'average of [1,2,3,4] should be 2.5');

        // Mixed positive and negative numbers
        let arr2 = [-5, 0, 5, 10];
        let avg2 = ss.meanSimple(arr2);
        assert.strictEqual(avg2, 2.5, 'average of [-5,0,5,10] should be 2.5');

        // All same values
        let arr3 = [7, 7, 7, 7];
        let avg3 = ss.meanSimple(arr3);
        assert.strictEqual(avg3, 7, 'average of [7,7,7,7] should be 7');

        // Single element array
        let arr4 = [42];
        let avg4 = ss.meanSimple(arr4);
        assert.strictEqual(avg4, 42, 'average of [42] should be 42');

        // Empty array – meanSimple throws an error, so we assert that it does
        let arr5 = [];
        assert.throws(
            () => ss.meanSimple(arr5),
            /meanSimple requires at least one data point/,
            'meanSimple should throw on an empty array'
        );

        done();
    });
});