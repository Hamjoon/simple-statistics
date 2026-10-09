let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.average', function(done) {
        // Normal case
        const data = [1, 2, 3, 4, 5];
        const avg = simple_statistics.average(data);
        assert.strictEqual(avg, 3);

        // Decimal values
        const data2 = [0.5, 1.5, 2.5];
        assert.strictEqual(simple_statistics.average(data2), 1.5);

        // Empty array should throw
        assert.throws(() => simple_statistics.average([]), /mean requires at least one data point/);

        done();
    });
});