let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.silhouetteMetric', function(done) {
        // Simple case with two clusters, each containing two points.
        // Points are 1‑dimensional for simplicity.
        const points = [
            [0],   // cluster 0
            [1],   // cluster 0
            [5],   // cluster 1
            [6]    // cluster 1
        ];
        const labels = [0, 0, 1, 1];

        // Expected silhouette values (computed manually):
        // For points 0 and 1: a = 1, b = 5 (or 4), s = (b-a)/b = 0.8 and 0.75
        // For points 2 and 3: a = 1, b = 4 (or 5), s = 0.75 and 0.8
        // The maximum silhouette value is 0.8
        const expected = 0.8;

        const result = simple_statistics.silhouetteMetric(points, labels);
        // Allow a tiny numerical tolerance
        assert.ok(Math.abs(result - expected) < 1e-12, `Expected ${expected}, got ${result}`);
        done();
    });
});