let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.subtractFromMean', function(done) {
        // Example from documentation
        const result = simple_statistics.subtractFromMean(20.5, 6, 53);
        assert.strictEqual(result, 14);

        // Additional sanity check:
        // Original list: [1, 2, 3, 4] -> mean = 2.5, n = 4, remove 4
        // New mean should be (2.5 * 4 - 4) / 3 = 2
        const result2 = simple_statistics.subtractFromMean(2.5, 4, 4);
        assert.strictEqual(result2, 2);

        done();
    });
});