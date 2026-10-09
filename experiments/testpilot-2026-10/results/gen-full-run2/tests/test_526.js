let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.standardDeviation', function(done) {
        // Example from the documentation
        const data = [2, 4, 4, 4, 5, 5, 7, 9];
        const result = simple_statistics.standardDeviation(data);
        // Population standard deviation for the above data is 2
        assert.strictEqual(result, 2);

        // Edge cases
        // Single value – deviation should be 0
        assert.strictEqual(simple_statistics.standardDeviation([5]), 0);
        // Two identical values – deviation should be 0
        assert.strictEqual(simple_statistics.standardDeviation([3, 3]), 0);

        done();
    });
});