let mocha = require('mocha');
let assert = require('assert');
let ss = require('simple-statistics');   // alias for brevity

describe('test simple_statistics', function () {
    it('test simple-statistics.combineVariances', function (done) {
        // Two simple data sets
        const data1 = [1, 2, 3];
        const data2 = [4, 5, 6];

        const n1 = data1.length;
        const n2 = data2.length;

        // Means of each set
        const mean1 = ss.mean(data1);
        const mean2 = ss.mean(data2);

        // ---- Population variances ----
        // `simple-statistics` does not expose a `variancePopulation` function in
        // some versions, so we compute it from the (sample) variance:
        //   σ²(pop) = s² * (n‑1) / n
        const variance1 = ss.variance(data1) * (n1 - 1) / n1;
        const variance2 = ss.variance(data2) * (n2 - 1) / n2;

        // Combine using the function under test
        const combined = ss.combineVariances(
            variance1, mean1, n1,
            variance2, mean2, n2
        );

        // Expected variance computed directly on the concatenated data
        const allData = data1.concat(data2);
        const N = allData.length;
        const expected = ss.variance(allData) * (N - 1) / N; // population variance

        // Allow for tiny floating‑point differences
        assert.ok(Math.abs(combined - expected) < 1e-12);
        done();
    });
});