let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleStandardDeviation', function(done) {
        // Known dataset: [1, 2, 3, 4, 5]
        // Mean = 3
        // Sum of squared deviations = 10
        // Sample variance = 10 / (5 - 1) = 2.5
        // Sample standard deviation = sqrt(2.5)
        const data = [1, 2, 3, 4, 5];
        const result = simple_statistics.sampleStandardDeviation(data);
        const expected = Math.sqrt(2.5);
        // Use a tolerance to account for floating‑point rounding
        const tolerance = 1e-12;
        assert.ok(Math.abs(result - expected) < tolerance, `Expected ${expected}, got ${result}`);
        done();
    });
});