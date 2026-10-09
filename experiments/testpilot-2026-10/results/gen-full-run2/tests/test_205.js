let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.kMeansCluster', function(done) {
        // Simple 2‑dimensional data with two well‑separated groups
        const points = [
            [0, 0], [0, 1], [1, 0],   // group A
            [10, 10], [10, 11], [11, 10] // group B
        ];
        const numCluster = 2;

        // Run k‑means (use the default Math.random as random source)
        const result = simple_statistics.kMeansCluster(points, numCluster);

        // ---- basic shape checks ------------------------------------------------
        assert(Array.isArray(result.labels), 'labels should be an array');
        assert(Array.isArray(result.centroids), 'centroids should be an array');
        assert.strictEqual(result.labels.length, points.length,
            'there should be a label for each point');
        assert.strictEqual(result.centroids.length, numCluster,
            'there should be exactly numCluster centroids');

        // ---- label sanity -------------------------------------------------------
        const uniqueLabels = [...new Set(result.labels)];
        assert.strictEqual(uniqueLabels.length, numCluster,
            'exactly two distinct labels should be present');

        // ---- verify that each centroid is the mean of its assigned points -------
        const labelToPoints = {};
        result.labels.forEach((lbl, idx) => {
            if (!labelToPoints[lbl]) labelToPoints[lbl] = [];
            labelToPoints[lbl].push(points[idx]);
        });

        const euclidean = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

        // tolerance for floating‑point comparison
        const EPS = 1e-6;

        result.centroids.forEach((centroid, lbl) => {
            const assigned = labelToPoints[lbl];
            // compute arithmetic mean of assigned points
            const mean = assigned.reduce((acc, p) => [acc[0] + p[0], acc[1] + p[1]], [0, 0])
                .map(v => v / assigned.length);
            // distance between reported centroid and computed mean should be tiny
            const dist = euclidean(centroid, mean);
            assert.ok(dist < EPS, `centroid ${lbl} differs from mean by ${dist}`);
        });

        // ---- sanity check: points from the two obvious groups end up in different clusters
        const groupALabels = new Set(points.slice(0, 3).map((_, i) => result.labels[i]));
        const groupBLabels = new Set(points.slice(3).map((_, i) => result.labels[i + 3]));
        // The intersection should be empty (i.e., the groups are separated)
        const intersection = [...groupALabels].filter(l => groupBLabels.has(l));
        assert.strictEqual(intersection.length, 0,
            'the two well‑separated groups should receive different cluster labels');

        done();
    });
});