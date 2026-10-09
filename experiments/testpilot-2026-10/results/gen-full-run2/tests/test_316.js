let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.modeFast', function(done) {
        // Basic mode detection
        assert.strictEqual(simple_statistics.modeFast([1, 2, 2, 3, 4]), 2);

        // Tie – should return the first value that reaches the highest count
        assert.strictEqual(simple_statistics.modeFast([5, 6, 5, 6]), 5);

        // Works with non‑numeric values
        assert.strictEqual(simple_statistics.modeFast(['a', 'b', 'a', 'c', 'b', 'a']), 'a');

        // All unique values – returns the first element
        assert.strictEqual(simple_statistics.modeFast([10, 20, 30]), 10);

        // Empty array should throw the specific error message
        assert.throws(
            () => simple_statistics.modeFast([]),
            /mode requires at last one data point/
        );

        done();
    });
});