let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileRank', function(done) {
        // Example cases from the documentation
        assert.strictEqual(simple_statistics.quantileRank([4, 3, 1, 2], 3), 0.75);
        assert.strictEqual(simple_statistics.quantileRank([4, 3, 2, 3, 1], 3), 0.7);
        assert.strictEqual(simple_statistics.quantileRank([2, 4, 1, 3], 6), 1);
        assert.strictEqual(simple_statistics.quantileRank([5, 3, 1, 2, 3], 4), 0.8);
        done();
    });
});