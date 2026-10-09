let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.sample', function(done) {
        // deterministic random source
        const randomSequence = [0, 0.5, 0.9];
        let idx = 0;
        function mockRandom() {
            return randomSequence[idx++];
        }

        const values = [0, 1, 2, 3, 4];
        const result = simple_statistics.sample(values, 3, mockRandom);

        // The algorithm may return the sampled values in any order,
        // so we sort before comparing with the expected set.
        const expected = [0, 3, 4];
        assert.deepStrictEqual(result.slice().sort((a, b) => a - b), expected);
        done();
    });
});