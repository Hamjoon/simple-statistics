let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.harmonicMean', function(done) {
        // Correct calculation
        const result = simple_statistics.harmonicMean([2, 3]);
        assert.ok(Math.abs(result - 2.4) < 1e-10, 'harmonicMean([2,3]) should be 2.4');

        // Empty array should throw
        assert.throws(() => simple_statistics.harmonicMean([]), /Error/, 'Empty array should throw');

        // Negative number should throw
        assert.throws(() => simple_statistics.harmonicMean([1, -2, 3]), /Error/, 'Negative values should throw');

        done();
    });
});