let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.variance', function(done) {
        // Normal case: variance of [1,2,3,4,5] should be 2
        const data = [1, 2, 3, 4, 5];
        const result = simple_statistics.variance(data);
        assert.strictEqual(result, 2);

        // Single element: variance should be 0
        assert.strictEqual(simple_statistics.variance([5]), 0);

        // Empty array should throw an error
        assert.throws(() => simple_statistics.variance([]), /requires at least one data point/);

        done();
    });
});