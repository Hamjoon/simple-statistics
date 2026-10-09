let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.geometricMean', function(done) {
        // Normal case – compare against the mathematically computed value
        const data = [1.8, 1.166666, 1.428571];
        const gm = simple_statistics.geometricMean(data);
        const expected = Math.pow(1.8 * 1.166666 * 1.428571, 1 / 3);
        assert.ok(Math.abs(gm - expected) < 1e-9, 'geometricMean should match expected value');

        // Empty array should throw an Error
        assert.throws(() => simple_statistics.geometricMean([]), Error, 'should throw on empty array');

        // Array containing a negative number should throw an Error
        assert.throws(() => simple_statistics.geometricMean([1, -2, 3]), Error, 'should throw on negative number');

        done();
    });
});