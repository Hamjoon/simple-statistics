let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.extentSorted', function(done) {
        // typical sorted array
        const input = [-100, -10, 1, 2, 5];
        const result = simple_statistics.extentSorted(input);
        assert.deepStrictEqual(result, [-100, 5]);

        // edge case: single-element array
        const single = [42];
        const resultSingle = simple_statistics.extentSorted(single);
        assert.deepStrictEqual(resultSingle, [42, 42]);

        done();
    });
});