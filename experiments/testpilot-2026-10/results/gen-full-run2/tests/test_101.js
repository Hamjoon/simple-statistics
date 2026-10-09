let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.ckmeans', function (done) {
        // 1. Basic clustering example – verify number of clusters and that all data are present
        const data = [1, 2, 4, 5, 7, 9, 10, 20];
        const nClusters = 3;
        const clusters = simple_statistics.ckmeans(data, nClusters);

        // a) Should return exactly nClusters clusters
        assert.strictEqual(clusters.length, nClusters, `ckmeans should return ${nClusters} clusters`);

        // b) All clusters should be sorted internally
        clusters.forEach((c, i) => {
            const sorted = [...c].sort((a, b) => a - b);
            assert.deepStrictEqual(c, sorted, `cluster ${i} should be sorted`);
        });

        // c) The concatenation of all clusters (flattened) should equal the sorted input data
        const flattened = clusters.reduce((acc, cur) => acc.concat(cur), []);
        assert.deepStrictEqual(flattened, [...data].sort((a, b) => a - b),
            'flattened clusters should contain all original values in order');

        // 2. All identical values – should return a single cluster regardless of nClusters
        const identical = [5, 5, 5, 5];
        const identicalClusters = simple_statistics.ckmeans(identical, 2);
        assert.strictEqual(identicalClusters.length, 1, 'identical values should yield one cluster');
        assert.deepStrictEqual(identicalClusters[0], identical,
            'the single cluster should contain all identical values');

        // 3. Requesting more clusters than data points – should throw an error
        assert.throws(
            () => simple_statistics.ckmeans([1, 2, 3], 5),
            /cannot generate more classes than there are data values/,
            'ckmeans should throw when nClusters > data length'
        );

        done();
    });
});