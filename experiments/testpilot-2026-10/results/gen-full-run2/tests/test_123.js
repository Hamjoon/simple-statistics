let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combineMeans', function(done) {
        // Example from documentation
        assert.strictEqual(simple_statistics.combineMeans(5, 3, 4, 3), 4.5);
        // Simple symmetric case
        assert.strictEqual(simple_statistics.combineMeans(10, 2, 20, 2), 15);
        // Different list sizes
        const expected = (0 * 1 + 100 * 3) / (1 + 3);
        assert.strictEqual(simple_statistics.combineMeans(0, 1, 100, 3), expected);
        done();
    });
});