let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.averageSimple', function(done) {
        // Normal cases
        assert.strictEqual(simple_statistics.averageSimple([0, 10]), 5);
        assert.strictEqual(simple_statistics.averageSimple([1, 2, 3, 4]), 2.5);
        assert.strictEqual(simple_statistics.averageSimple([-5, 5]), 0);

        // Edge case: single element array
        assert.strictEqual(simple_statistics.averageSimple([42]), 42);

        // Error case: empty array should throw
        assert.throws(() => simple_statistics.averageSimple([]), /Error/);

        done();
    });
});