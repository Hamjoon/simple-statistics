let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.kMeansCluster', function(done) {
        // deterministic pseudo‑random source to avoid flaky behaviour
        function deterministicRandom() {
            let seed = 0.5; // any non‑zero seed works
            return function () {
                // simple linear congruential generator (mod 1 keeps it in [0,1))
                seed = (seed * 16807) % 1;
                return seed;
            };
        }
        const randomSource = deterministicRandom();

        // points that clearly belong to two separate clusters
        const points = [
            [0, 0],
            [0, 0.1],
            [10, 10],
            [10, 10.1]
        ];

        const result = simple_statistics.kMeansCluster(points, 2, randomSource);

        // ---- basic shape checks ----
        assert.strictEqual(result.labels.length, points.length, 'labels length matches points');
        assert.strictEqual(result.centroids.length, 2, 'two centroids are returned');

        // ---- clustering sanity checks ----
        // first two points should share a label
        assert.strictEqual(result.labels[0], result.labels[1], 'first two points share a label');
        // last two points should share a label
        assert.strictEqual(result.labels[2], result.labels[3], 'last two points share a label');
        // the two groups must be assigned different labels
        assert.notStrictEqual(result.labels[0], result.labels[2], 'different clusters have different labels');

        // ---- centroid proximity checks ----
        const centroidA = result.centroids[result.labels[0]];
        const centroidB = result.centroids[result.labels[2]];

        const distA = Math.hypot(centroidA[0] - points[0][0], centroidA[1] - points[0][1]);
        const distB = Math.hypot(centroidB[0] - points[2][0], centroidB[1] - points[2][1]);

        // centroids should be very close to the centre of their respective groups
        assert.ok(distA < 0.2, 'centroid for first cluster is close to its points');
        assert.ok(distB < 0.2, 'centroid for second cluster is close to its points');

        done();
    });
});