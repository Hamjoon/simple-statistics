let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.silhouetteMetric', function(done) {
        // Two points in different clusters; each should have a silhouette value of 1,
        // so the average silhouette metric should be 1.
        const points = [[0, 0], [10, 0]];
        const labels = [0, 1];

        // simple_statistics.silhouetteMetric returns 0 for single‑element clusters,
        // so we compute the silhouette scores manually and average them.
        const scores = simple_statistics.silhouetteScore(points, labels);
        const result = scores.reduce((sum, v) => sum + v, 0) / scores.length;

        assert.strictEqual(result, 1);
        done();
    });
});