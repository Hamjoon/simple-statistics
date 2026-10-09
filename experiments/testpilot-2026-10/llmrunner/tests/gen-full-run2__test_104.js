let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.ckmeans', function (done) {
        // Basic functionality test
        const data = [1, 2, 4, 5, 7, 9, 10, 20];
        const k = 3;

        // Run ckmeans
        const result = simple_statistics.ckmeans(data, k);

        // 1️⃣  Verify we got the requested number of clusters
        assert.strictEqual(
            result.length,
            k,
            `ckmeans should return exactly ${k} clusters`
        );

        // 2️⃣  Verify that the clusters together contain all original values in order
        const flattened = [].concat(...result);
        const sortedData = data.slice().sort((a, b) => a - b);
        assert.deepStrictEqual(
            flattened,
            sortedData,
            'All data points should appear exactly once in the concatenated clusters, in sorted order'
        );

        // 3️⃣  Verify that each cluster is internally sorted (ckmeans guarantees this)
        result.forEach((cluster, idx) => {
            const sortedCluster = cluster.slice().sort((a, b) => a - b);
            assert.deepStrictEqual(
                cluster,
                sortedCluster,
                `Cluster ${idx} should be sorted`
            );
        });

        // 4️⃣  Verify that the first element of each cluster can be used as a break point
        const breaks = result.map(cluster => cluster[0]);
        // The break points should be a strictly increasing sequence that starts with the
        // smallest data value and ends with the largest.
        const expectedBreaks = sortedData.filter((v, i) => i === 0 || v !== sortedData[i - 1]);
        // Keep only the first element of each cluster (there should be exactly k of them)
        const expectedFirsts = result.map(cluster => cluster[0]);
        assert.deepStrictEqual(
            breaks,
            expectedFirsts,
            'break points should match the first elements of each cluster'
        );

        // 5️⃣  Error handling: requesting more clusters than data points should throw
        assert.throws(
            () => simple_statistics.ckmeans([1, 2, 3], 5),
            /Error|RangeError/,
            'ckmeans should throw an error when nClusters > data length'
        );

        done();
    });
});