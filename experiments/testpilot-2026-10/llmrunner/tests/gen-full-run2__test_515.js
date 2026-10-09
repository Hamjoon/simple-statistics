let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.silhouetteMetric', function(done) {
        // Two perfectly separated clusters: each point is identical within its cluster
        const points = [
            [0, 0],
            [0, 0],
            [10, 10],
            [10, 10]
        ];
        const labels = [0, 0, 1, 1];

        const result = simple_statistics.silhouetteMetric(points, labels);
        // In this ideal case the silhouette score should be 1
        assert.ok(Math.abs(result - 1) < 1e-12);
        done();
    });
});