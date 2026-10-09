let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.ckmeans', function(done) {
        // Normal clustering: unsorted input, 3 clusters
        const data = [9, 1, 5, 2, 8, 3, 7, 4, 6];
        const clusters = simple_statistics.ckmeans(data, 3);
        // Should produce exactly 3 clusters
        assert.strictEqual(clusters.length, 3);
        // All original values must be present and sorted when flattened
        const flattened = [].concat(...clusters).sort((a, b) => a - b);
        assert.deepStrictEqual(flattened, [1,2,3,4,5,6,7,8,9]);
        // Each cluster should be internally sorted (ckmeans returns sorted slices)
        clusters.forEach(c => {
            assert.deepStrictEqual(c, c.slice().sort((a, b) => a - b));
        });

        // Identical values: should return a single cluster regardless of requested number
        const identical = [5, 5, 5, 5];
        const identClusters = simple_statistics.ckmeans(identical, 2);
        assert.strictEqual(identClusters.length, 1);
        assert.deepStrictEqual(identClusters[0], [5, 5, 5, 5]);

        // Error case: more clusters than data points
        assert.throws(
            () => simple_statistics.ckmeans([1, 2, 3], 5),
            /cannot generate more classes/
        );

        done();
    });
});