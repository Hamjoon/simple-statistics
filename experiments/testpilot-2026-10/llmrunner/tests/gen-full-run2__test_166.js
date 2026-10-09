let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.factorial', function (done) {
        // Basic known values
        assert.strictEqual(simple_statistics.factorial(0), 1);
        assert.strictEqual(simple_statistics.factorial(1), 1);
        assert.strictEqual(simple_statistics.factorial(5), 120);
        assert.strictEqual(simple_statistics.factorial(10), 3628800);

        // Edge case: negative input should throw an error (the library throws)
        assert.throws(
            () => simple_statistics.factorial(-3),
            /requires a non-negative value/
        );

        done();
    });
});