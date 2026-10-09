let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.rms', function(done) {
        // Normal case
        const data = [2, 3, 6];
        const expected = Math.sqrt((Math.pow(2, 2) + Math.pow(3, 2) + Math.pow(6, 2)) / data.length);
        assert.strictEqual(simple_statistics.rms(data), expected);

        // Another normal case with negative numbers
        const data2 = [-1, -2, -3];
        const expected2 = Math.sqrt((Math.pow(-1, 2) + Math.pow(-2, 2) + Math.pow(-3, 2)) / data2.length);
        assert.strictEqual(simple_statistics.rms(data2), expected2);

        // Edge case: empty array should throw
        assert.throws(() => simple_statistics.rms([]), /requires at least one data point/);

        done();
    });
});