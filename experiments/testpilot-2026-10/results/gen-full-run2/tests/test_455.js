let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleCorrelation', function(done) {
        // Example from the documentation
        const r1 = simple_statistics.sampleCorrelation(
            [1, 2, 3, 4, 5, 6],
            [2, 2, 3, 4, 5, 60]
        );
        // Expected value is approximately 0.69
        assert.ok(Math.abs(r1 - 0.69) < 0.01, `Expected ~0.69, got ${r1}`);

        // Perfect positive correlation
        const r2 = simple_statistics.sampleCorrelation([1, 2, 3], [2, 4, 6]);
        assert.strictEqual(r2, 1, `Expected 1 for perfect positive correlation, got ${r2}`);

        // Perfect negative correlation
        const r3 = simple_statistics.sampleCorrelation([1, 2, 3], [6, 4, 2]);
        assert.strictEqual(r3, -1, `Expected -1 for perfect negative correlation, got ${r3}`);

        done();
    });
});