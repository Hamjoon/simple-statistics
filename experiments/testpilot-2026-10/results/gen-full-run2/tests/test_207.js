let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.kMeansCluster', function(done) {
        // ---------- deterministic random source ----------
        // simple-statistics.kMeansCluster uses the random source to pick
        // initial centroids via `Math.floor(randomSource() * points.length)`.
        // We provide a predictable sequence that will select two distinct
        // initial points for the 2‑cluster case.
        const deterministicRandom = (() => {
            const seq = [0, 0.5]; // will map to indices 0 and 2 for 4 points
            let i = 0;
            return () => seq[i++ % seq.length];
        })();

        // ---------- basic functionality ----------
        const points = [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1]
        ];
        const result = simple_statistics.kMeansCluster(points, 2, deterministicRandom);

        // result should contain `labels` and `centroids`
        assert.ok(Array.isArray(result.labels), 'labels should be an array');
        assert.ok(Array.isArray(result.centroids), 'centroids should be an array');

        // length checks
        assert.strictEqual(result.labels.length, points.length, 'labels length matches points');
        assert.strictEqual(result.centroids.length, 2, 'centroids length matches numCluster');

        // Helper to compare two points with tolerance
        const close = (a, b, eps = 1e-9) => Math.abs(a - b) < eps;

        // Expected centroids after convergence (order may vary)
        const expectedCentroids = [
            [0, 0.5],
            [1, 0.5]
        ];

        // Sort both arrays by the first coordinate for order‑independent comparison
        const sortByFirst = arr => arr.slice().sort((p, q) => p[0] - q[0]);
        const got = sortByFirst(result.centroids);
        const exp = sortByFirst(expectedCentroids);

        // Verify each centroid is close to the expected one
        for (let i = 0; i < exp.length; i++) {
            assert.ok(close(got[i][0], exp[i][0]), `centroid ${i} x‑coordinate`);
            assert.ok(close(got[i][1], exp[i][1]), `centroid ${i} y‑coordinate`);
        }

        // Verify that each label corresponds to the nearest centroid
        for (let i = 0; i < points.length; i++) {
            const pt = points[i];
            const label = result.labels[i];
            const centroid = result.centroids[label];
            // compute distance to assigned centroid
            const assignedDist = Math.hypot(pt[0] - centroid[0], pt[1] - centroid[1]);
            // ensure no other centroid is strictly closer
            for (let c = 0; c < result.centroids.length; c++) {
                if (c === label) continue;
                const other = result.centroids[c];
                const otherDist = Math.hypot(pt[0] - other[0], pt[1] - other[1]);
                assert.ok(assignedDist <= otherDist + 1e-9,
                    `point ${i} is assigned to the nearest centroid`);
            }
        }

        // ---------- error case: more clusters than points ----------
        assert.throws(() => {
            simple_statistics.kMeansCluster([[0, 0], [10, 10]], 3);
        }, /Error/, 'should throw when a centroid ends up friendless');

        done();
    });
});