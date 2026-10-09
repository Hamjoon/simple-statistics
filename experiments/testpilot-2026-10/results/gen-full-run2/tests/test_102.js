let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.ckmeans', function(done) {
        // Basic functionality test
        const data = [-1, 2, -1, 2, 4, 5, 6, -1, 2, -1];
        const result = simple_statistics.ckmeans(data, 3);
        const expected = [[-1, -1, -1, -1], [2, 2, 2], [4, 5, 6]];
        assert.deepStrictEqual(result, expected, 'ckmeans should produce the expected clusters');

        // Edge‑case: requesting more clusters than data points should throw
        assert.throws(() => {
            simple_statistics.ckmeans([1, 2, 3], 5);
        }, /Error/, 'ckmeans should throw when nClusters > data length');

        done();
    });
});