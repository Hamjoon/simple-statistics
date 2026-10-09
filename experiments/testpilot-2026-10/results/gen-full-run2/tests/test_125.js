let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combineVariances', function(done) {
        // Two simple data sets
        const data1 = [1, 2, 3];
        const data2 = [4, 5, 6];

        const n1 = data1.length;
        const n2 = data2.length;

        // Means of each set
        const mean1 = simple_statistics.mean(data1);
        const mean2 = simple_statistics.mean(data2);

        // Population variances of each set
        const variance1 = simple_statistics.variancePopulation(data1);
        const variance2 = simple_statistics.variancePopulation(data2);

        // Combine using the function under test
        const combined = simple_statistics.combineVariances(
            variance1, mean1, n1,
            variance2, mean2, n2
        );

        // Expected variance computed directly on the concatenated data
        const expected = simple_statistics.variancePopulation(data1.concat(data2));

        // Allow for tiny floating‑point differences
        assert.ok(Math.abs(combined - expected) < 1e-12);
        done();
    });
});