let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.variance', function (done) {
        // Known dataset: sample variance of [1,2,3,4,5] is 2.5
        const data = [1, 2, 3, 4, 5];
        const result = simple_statistics.variance(data);
        assert.strictEqual(result, 2.5);

        // When there is only a single value the function returns NaN
        // (it does not throw an exception)
        const singleValueResult = simple_statistics.variance([42]);
        assert.ok(Number.isNaN(singleValueResult), 'variance([42]) should be NaN');

        done();
    });
});