let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.subtractFromMean', function(done) {
        // Simple integer dataset
        const data = [1, 2, 3, 4, 5];
        const mean = simple_statistics.mean(data);
        const n = data.length;

        // Remove the value 3
        const newMean1 = simple_statistics.subtractFromMean(mean, n, 3);
        const expected1 = simple_statistics.mean([1, 2, 4, 5]);
        assert.strictEqual(newMean1, expected1);

        // Remove the value 5
        const newMean2 = simple_statistics.subtractFromMean(mean, n, 5);
        const expected2 = simple_statistics.mean([1, 2, 3, 4]);
        assert.strictEqual(newMean2, expected2);

        // Floating‑point dataset
        const data2 = [0.1, 0.2, 0.3];
        const mean2 = simple_statistics.mean(data2);
        const n2 = data2.length;

        // Remove the value 0.2
        const newMean3 = simple_statistics.subtractFromMean(mean2, n2, 0.2);
        const expected3 = simple_statistics.mean([0.1, 0.3]);
        const epsilon = 1e-12;
        assert.ok(Math.abs(newMean3 - expected3) < epsilon);

        done();
    });
});