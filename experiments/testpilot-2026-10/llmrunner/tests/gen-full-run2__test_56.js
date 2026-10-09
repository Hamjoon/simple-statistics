let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.bernoulliDistribution', function(done) {
        // Valid probabilities
        assert.deepStrictEqual(simple_statistics.bernoulliDistribution(0.3), [0.7, 0.3]);
        assert.deepStrictEqual(simple_statistics.bernoulliDistribution(0),   [1,   0]);
        assert.deepStrictEqual(simple_statistics.bernoulliDistribution(1),   [0,   1]);

        // Invalid probabilities should throw
        assert.throws(
            () => simple_statistics.bernoulliDistribution(-0.1),
            /bernoulliDistribution requires probability/
        );
        assert.throws(
            () => simple_statistics.bernoulliDistribution(1.5),
            /bernoulliDistribution requires probability/
        );

        done();
    });
});