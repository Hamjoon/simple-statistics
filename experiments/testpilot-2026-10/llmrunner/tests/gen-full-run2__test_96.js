let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.ckmeans', function(done) {
        // Basic functionality: evenly spaced data should split at the median
        const data = [1,2,3,4,5,6,7,8,9,10];
        const clusters = simple_statistics.ckmeans(data, 2);
        const expected = [[1,2,3,4,5],[6,7,8,9,10]];
        assert.deepStrictEqual(clusters, expected);

        // Edge case: number of clusters equals number of data points
        const clustersAll = simple_statistics.ckmeans(data, data.length);
        const expectedAll = data.map(v => [v]);
        assert.deepStrictEqual(clustersAll, expectedAll);

        // Edge case: unsorted input should be handled correctly
        const unsorted = [10,1,5,2,8,3,7,4,6,9];
        const clustersUnsorted = simple_statistics.ckmeans(unsorted, 2);
        assert.deepStrictEqual(clustersUnsorted, expected);

        done();
    });
});