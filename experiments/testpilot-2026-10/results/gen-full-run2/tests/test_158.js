let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.extentSorted', function(done) {
        // Typical sorted array
        const arr = [1, 2, 3, 4, 5];
        const result = simple_statistics.extentSorted(arr);
        assert.deepStrictEqual(result, [1, 5]);

        // Single-element sorted array
        const single = [42];
        const resultSingle = simple_statistics.extentSorted(single);
        assert.deepStrictEqual(resultSingle, [42, 42]);

        // Empty array (should return [undefined, undefined])
        const empty = [];
        const resultEmpty = simple_statistics.extentSorted(empty);
        assert.deepStrictEqual(resultEmpty, [undefined, undefined]);

        done();
    });
});