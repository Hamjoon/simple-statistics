let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.average', function(done) {
        // Normal case
        const data = [1, 2, 3, 4, 5];
        const expected = 3;
        assert.strictEqual(simple_statistics.mean(data), expected);

        // Negative numbers
        const dataNeg = [-2, -4, -6];
        const expectedNeg = -4;
        assert.strictEqual(simple_statistics.mean(dataNeg), expectedNeg);

        // Empty array should throw
        assert.throws(() => simple_statistics.mean([]), /mean requires at least one data point/);

        done();
    });
});