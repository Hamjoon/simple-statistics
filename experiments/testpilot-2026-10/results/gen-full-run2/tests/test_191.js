let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.interquartileRange', function(done) {
        // basic case
        const data1 = [0, 1, 2, 3];
        const expected1 = simple_statistics.quantile(data1, 0.75) - simple_statistics.quantile(data1, 0.25);
        assert.strictEqual(simple_statistics.interquartileRange(data1), expected1);

        // unsorted input should give the same result
        const data2 = [3, 0, 2, 1];
        const expected2 = simple_statistics.quantile(data2, 0.75) - simple_statistics.quantile(data2, 0.25);
        assert.strictEqual(simple_statistics.interquartileRange(data2), expected2);

        // all identical values – IQR should be zero
        const data3 = [5, 5, 5, 5];
        const expected3 = 0;
        assert.strictEqual(simple_statistics.interquartileRange(data3), expected3);

        done();
    });
});