let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.rms', function(done) {
        // Basic functionality
        assert.strictEqual(simple_statistics.rms([-1, 1, -1, 1]), 1);
        assert.strictEqual(simple_statistics.rms([0, 0, 0]), 0);
        assert.strictEqual(simple_statistics.rms([2, 2]), 2);

        // Verify that an empty array throws an error
        assert.throws(() => simple_statistics.rms([]), Error);

        done();
    });
});