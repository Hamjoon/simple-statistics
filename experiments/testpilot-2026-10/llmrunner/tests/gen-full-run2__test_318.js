let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.modeFast', function(done) {
        // Basic functionality
        assert.strictEqual(simple_statistics.modeFast([1, 2, 2, 3, 3, 3]), 3);

        // Tie – the implementation returns the first value that reaches the highest count.
        // In this case 'b' reaches a count of 2 before 'a' does, so 'b' is returned.
        assert.strictEqual(simple_statistics.modeFast(['a', 'b', 'b', 'a']), 'b');

        // Example from documentation
        assert.strictEqual(
            simple_statistics.modeFast(['rabbits', 'rabbits', 'squirrels']),
            'rabbits'
        );

        // Empty array should throw an error with the expected message
        assert.throws(
            () => simple_statistics.modeFast([]),
            /mode requires at last one data point/
        );

        done();
    });
});