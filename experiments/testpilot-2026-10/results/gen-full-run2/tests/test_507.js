let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.silhouette', function(done) {
        // Simple dataset: two well‑separated clusters, each with two points
        const points = [
            [0, 0],
            [0, 1],
            [10, 0],
            [10, 1]
        ];
        const labels = [0, 0, 1, 1];

        // Compute the silhouette score using the library
        const silhouette = simple_statistics.silhouette(points, labels);

        // Expected silhouette for this configuration is ~0.9
        // (each point has a(i)=1, b(i)≈10.025 → s ≈ (10.025‑1)/10.025 ≈ 0.9)
        const expected = 0.9;
        const tolerance = 0.01;

        assert.ok(Math.abs(silhouette - expected) < tolerance,
            `Silhouette ${silhouette} not within ${tolerance} of expected ${expected}`);

        done();
    });
});