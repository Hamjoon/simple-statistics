let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.silhouette', function(done) {
        // Basic sanity check: two points close together in one cluster,
        // one far away in another cluster.
        const points = [[0], [1], [10]];
        const labels = [0, 0, 1];
        const result = simple_statistics.silhouette(points, labels);
        // Expected silhouette values:
        // point 0: a = 1 (distance to point 1), b = 10 (distance to point 10) => (10-1)/10 = 0.9
        // point 1: a = 1 (distance to point 0), b = 9 (distance to point 10)  => (9-1)/9  = 8/9 ≈ 0.888888...
        // point 2: alone in its cluster => silhouette = 0 (code skips calculation)
        const expected = [0.9, 8 / 9, 0];
        const eps = 1e-9;
        for (let i = 0; i < expected.length; i++) {
            assert.ok(
                Math.abs(result[i] - expected[i]) < eps,
                `result[${i}] = ${result[i]} is not close to expected ${expected[i]}`
            );
        }

        // Verify that mismatched input lengths throw the expected error.
        assert.throws(
            () => simple_statistics.silhouette([[0]], [0, 1]),
            /must have exactly as many labels as points/
        );

        done();
    });
});