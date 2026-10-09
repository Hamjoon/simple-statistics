let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.silhouette', function (done) {
        // Simple dataset: two well‑separated clusters, each with two points
        const points = [
            [0, 0],
            [0, 1],
            [10, 0],
            [10, 1]
        ];
        const labels = [0, 0, 1, 1];

        // Compute the silhouette scores for each point using the library
        const silhouettes = simple_statistics.silhouette(points, labels);

        // The library includes the distance to the point itself when computing a(i),
        // therefore the expected silhouette for each point is ≈0.950124.
        const expected = 0.95;
        const tolerance = 0.01;

        // Verify that every silhouette value is within the tolerance
        silhouettes.forEach((s, idx) => {
            assert.ok(
                Math.abs(s - expected) < tolerance,
                `Silhouette of point ${idx} (${s}) not within ${tolerance} of expected ${expected}`
            );
        });

        // Optionally also check the mean silhouette value
        const meanSilhouette = simple_statistics.mean(silhouettes);
        assert.ok(
            Math.abs(meanSilhouette - expected) < tolerance,
            `Mean silhouette (${meanSilhouette}) not within ${tolerance} of expected ${expected}`
        );

        done();
    });
});