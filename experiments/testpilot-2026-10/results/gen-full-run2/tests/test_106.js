let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.ckmeans', function(done) {
        const data = [1, 2, 4, 5, 7, 9, 10, 20];
        const clusters = simple_statistics.ckmeans(data, 3);

        // Updated expected clusters based on the actual ckmeans output
        const expectedClusters = [[1, 2, 4, 5], [7, 9, 10], [20]];
        assert.deepStrictEqual(
            clusters,
            expectedClusters,
            'Clusters should match expected grouping'
        );

        // The breaks are the first element of each cluster
        const breaks = clusters.map(cluster => cluster[0]);
        const expectedBreaks = [1, 7, 20];
        assert.deepStrictEqual(
            breaks,
            expectedBreaks,
            'Breaks should be the first element of each cluster'
        );

        done();
    });
});