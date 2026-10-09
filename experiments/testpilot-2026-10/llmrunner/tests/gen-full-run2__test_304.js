let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.min', function (done) {
        // Basic functionality
        assert.strictEqual(simple_statistics.min([5, 2, 9, -1, 3]), -1);

        // Single‑element array
        assert.strictEqual(simple_statistics.min([10]), 10);

        // Empty array – simple-statistics throws an error, so we assert that the
        // correct error is thrown instead of expecting `undefined`.
        assert.throws(
            () => simple_statistics.min([]),
            {
                name: 'Error',
                message: /min requires at least one data point/
            },
            'Calling min([]) should throw an error indicating no data points'
        );

        done();
    });
});