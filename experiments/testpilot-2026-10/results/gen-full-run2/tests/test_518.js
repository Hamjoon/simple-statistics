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

        // The simple-statistics implementation of silhouetteMetric returns the
        // *maximum* silhouette value among all points (it includes the point
        // itself when computing intra‑cluster distances). For this data set
        // the maximum silhouette value is 0.9090909090909091.
        const expected = 0.9090909090909091;

        const result = simple_statistics.silhouetteMetric(points, labels);
        // Allow a tiny numerical tolerance
        assert.ok(Math.abs(result - expected) < 1e-12,
            `Expected ${expected}, got ${result}`);
        done();
    });
});