let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleVariance', function(done) {
        // Basic known example
        const result1 = simple_statistics.sampleVariance([1, 2, 3, 4, 5]);
        assert.strictEqual(result1, 2.5, 'sample variance of [1,2,3,4,5] should be 2.5');

        // Additional example with integer result
        const data2 = [2, 4, 4, 4, 5, 5, 7, 9];
        const result2 = simple_statistics.sampleVariance(data2);
        const expected2 = 32 / 7; // 4.571428571428571
        assert.strictEqual(result2, expected2, 'sample variance of data2 should match expected value');

        // Error case: array length less than 2
        assert.throws(
            () => simple_statistics.sampleVariance([42]),
            /Error/,
            'should throw an error when input length is less than 2'
        );

        done();
    });
});