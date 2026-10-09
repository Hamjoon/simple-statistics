let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.silhouetteMetric', function(done) {
        // Two points in different clusters; each should have a silhouette value of 1,
        // so the maximum silhouette metric should be 1.
        const points = [[0, 0], [10, 0]];
        const labels = [0, 1];
        const result = simple_statistics.silhouetteMetric(points, labels);
        assert.strictEqual(result, 1);
        done();
    });
});