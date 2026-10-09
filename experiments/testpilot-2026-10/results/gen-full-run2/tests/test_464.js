let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleKurtosis', function(done) {
        // Known example from the documentation
        const data = [1, 2, 2, 3, 5];
        const expected = 1.4555765595463122;
        const result = simple_statistics.sampleKurtosis(data);
        // Allow a tiny floating‑point tolerance
        const tolerance = 1e-12;
        assert.ok(Math.abs(result - expected) < tolerance, `Expected ${expected}, got ${result}`);

        // Verify that an error is thrown for insufficient data length (<4)
        assert.throws(() => {
            simple_statistics.sampleKurtosis([1, 2, 3]);
        }, /Error/, 'Expected an error when input length is less than 4');

        done();
    });
});