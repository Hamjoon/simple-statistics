let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.variance', function(done) {
        // Known value test
        const v1 = simple_statistics.variance([1, 2, 3, 4, 5, 6]);
        assert.strictEqual(v1, 2.9166666666666665);

        // Zero variance when all values are identical
        const v2 = simple_statistics.variance([5, 5, 5]);
        assert.strictEqual(v2, 0);

        // Should throw an error for empty input
        assert.throws(() => simple_statistics.variance([]), /requires at least one data point/);

        done();
    });
});