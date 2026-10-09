let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.modeSorted', function(done) {
        // 1. Empty array should throw an error
        assert.throws(() => {
            simple_statistics.modeSorted([]);
        }, /mode requires at least one data point/);

        // 2. Single element array returns that element
        assert.strictEqual(simple_statistics.modeSorted([42]), 42);

        // 3. Simple mode where the smallest number repeats most
        assert.strictEqual(simple_statistics.modeSorted([1, 1, 2, 3, 4]), 1);

        // 4. Mode is the highest number in the list
        assert.strictEqual(
            simple_statistics.modeSorted([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]),
            4
        );

        // 5. Mode with negative numbers
        assert.strictEqual(
            simple_statistics.modeSorted([-5, -5, -3, -1, -1, -1, 0]),
            -1
        );

        done();
    });
});