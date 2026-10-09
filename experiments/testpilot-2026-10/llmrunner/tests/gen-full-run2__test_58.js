let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.bernoulliDistribution', function(done) {
        // Valid probability
        const result = simple_statistics.bernoulliDistribution(0.3);
        assert.deepStrictEqual(result, [0.7, 0.3]);

        // Invalid probability should throw
        assert.throws(() => simple_statistics.bernoulliDistribution(-0.1), Error);
        assert.throws(() => simple_statistics.bernoulliDistribution(1.5), Error);

        done();
    });
});