let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.addToMean', function(done) {
        // Example from the documentation
        const result1 = simple_statistics.addToMean(14, 5, 53);
        assert.strictEqual(result1, 20.5);

        // Additional sanity check:
        // Original list [2, 4] => mean = 3, n = 2, add 6 => new mean = (3*2 + 6) / 3 = 4
        const result2 = simple_statistics.addToMean(3, 2, 6);
        assert.strictEqual(result2, 4);

        done();
    });
});