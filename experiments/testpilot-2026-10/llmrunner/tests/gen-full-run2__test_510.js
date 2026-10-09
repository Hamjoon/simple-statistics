let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.silhouette', function (done) {
        // Basic sanity check: two points close together in one cluster,
        // one far away in another cluster.
        const points = [[0], [1], [10]];
        const labels = [0, 0, 1];
        const result = simple_statistics.silhouette(points, labels);

        // Expected silhouette values according to the current implementation
        // of simple-statistics (which includes the distance to the point itself
        // when computing the intra‑cluster distance `a`):
        // point 0: a = (0 + 1) / 2 = 0.5, b = 10               => (10‑0.5)/10 = 0.95
        // point 1: a = (1 + 0) / 2 = 0.5, b = 9                => (9‑0.5)/9   = 8.5/9 ≈ 0.944444...
        // point 2: alone in its cluster => silhouette = 0
        const expected = [0.95, 8.5 / 9, 0];
        const eps = 1e-9;

        for (let i = 0; i < expected.length; i++) {
            assert.ok(
                Math.abs(result[i] - expected[i]) < eps,
                `result[${i}] = ${result[i]} is not close to expected ${expected[i]}`
            );
        }

        // Verify that mismatched input lengths throw the expected error.
        assert.throws(
            () => simple_statistics.silhouette([[0]], [0, 1]),
            /must have exactly as many labels as points/
        );

        done();
    });
});