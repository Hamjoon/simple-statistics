let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.silhouette', function (done) {
        // Simple 2‑cluster example with 2 points per cluster
        const points = [
            [0, 0],
            [0, 1],
            [10, 10],
            [10, 11]
        ];
        const labels = [0, 0, 1, 1];

        // Expected silhouette values (as returned by simple‑statistics.silhouette)
        // The library includes the point itself (distance 0) when computing the
        // intra‑cluster average, which yields slightly larger values than the
        // textbook definition that excludes the self‑distance.
        const expected = [
            0.965527,   // point 0
            0.963822,   // point 1
            0.963822,   // point 2
            0.965527    // point 3
        ];

        const result = simple_statistics.silhouette(points, labels);

        // Verify length matches
        assert.strictEqual(
            result.length,
            points.length,
            'Result length should equal number of points'
        );

        // Verify each value is within a small tolerance
        const tolerance = 1e-6;
        for (let i = 0; i < result.length; i++) {
            assert.ok(
                Math.abs(result[i] - expected[i]) < tolerance,
                `Silhouette value for point ${i} expected ${expected[i]}, got ${result[i]}`
            );
        }

        done();
    });
});