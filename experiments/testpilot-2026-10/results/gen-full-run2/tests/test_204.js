let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.kMeansCluster', function(done) {
        // Simple dataset with two obvious clusters
        const points = [
            [0, 0], [0, 1], [1, 0], [1, 1],
            [5, 5], [5, 6], [6, 5], [6, 6]
        ];
        const numCluster = 2;

        // Deterministic random source to make the test repeatable
        const randomValues = [0, 0.9, 0.1, 0.8, 0.2, 0.7, 0.3, 0.6];
        let idx = 0;
        const randomSource = () => {
            const val = randomValues[idx % randomValues.length];
            idx++;
            return val;
        };

        // Run kMeansCluster
        const clusters = simple_statistics.kMeansCluster(points, numCluster, randomSource);

        // Verify we got the requested number of clusters
        assert.strictEqual(clusters.length, numCluster, 'Should return exactly two clusters');

        // Verify that every original point appears in exactly one cluster
        const allClusteredPoints = clusters.reduce((acc, cluster) => acc.concat(cluster), []);
        // Sort both arrays for deep equality comparison
        const sortFn = (a, b) => a[0] - b[0] || a[1] - b[1];
        assert.deepStrictEqual(
            allClusteredPoints.sort(sortFn),
            points.sort(sortFn),
            'All original points must be present in the clusters'
        );

        // Ensure no cluster is empty
        clusters.forEach((cluster, i) => {
            assert.ok(cluster.length > 0, `Cluster ${i} should not be empty`);
        });

        done();
    });
});