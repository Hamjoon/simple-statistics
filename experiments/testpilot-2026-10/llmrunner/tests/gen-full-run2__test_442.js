let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.rms', function(done) {
        // Test data
        const data = [1, 2, 3, 4];
        // Expected RMS calculated manually
        const expected = Math.sqrt((1*1 + 2*2 + 3*3 + 4*4) / data.length);
        // Actual RMS from the library
        const result = simple_statistics.rms(data);
        // Verify the result is within a very small tolerance
        const tolerance = 1e-12;
        assert.ok(Math.abs(result - expected) < tolerance, `Expected ${expected}, but got ${result}`);
        done();
    });
});