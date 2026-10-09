let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleStandardDeviation', function(done) {
        // Example from the documentation
        const data = [2, 4, 4, 4, 5, 5, 7, 9];
        const result = simple_statistics.sampleStandardDeviation(data);
        // Expected value (computed from the example): ~2.138089935299395
        const expected = 2.138089935299395;
        const tolerance = 1e-12;
        assert.ok(Math.abs(result - expected) < tolerance, `Expected ${expected}, got ${result}`);
        done();
    });
});