let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.average', function(done) {
        // Normal case: average of two numbers
        const result1 = simple_statistics.average([0, 10]);
        assert.strictEqual(result1, 5, 'average([0,10]) should be 5');

        // Mixed positive and negative numbers
        const result2 = simple_statistics.average([-5, 5, 10]);
        assert.strictEqual(result2, 10 / 3, 'average([-5,5,10]) should be 10/3');

        // Decimal numbers
        const result3 = simple_statistics.average([1.2, 3.4, 5.6]);
        assert.strictEqual(result3, (1.2 + 3.4 + 5.6) / 3, 'average of decimal numbers');

        // Edge case: single element array
        const result4 = simple_statistics.average([42]);
        assert.strictEqual(result4, 42, 'average of single-element array should be the element itself');

        // Error case: empty array should throw
        assert.throws(
            () => simple_statistics.average([]),
            Error,
            'average([]) should throw an Error'
        );

        done();
    });
});