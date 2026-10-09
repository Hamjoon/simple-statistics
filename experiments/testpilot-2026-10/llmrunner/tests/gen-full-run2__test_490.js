let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleWithReplacement', function(done) {
        // Deterministic random source to make the test repeatable
        const values = [10, 20, 30, 40];
        const sequence = [0, 0.5, 0.999]; // will map to indices 0, 2, 3
        let idx = 0;
        function deterministicRandom() {
            return sequence[idx++ % sequence.length];
        }

        const sampled = simple_statistics.sampleWithReplacement(values, 3, deterministicRandom);
        assert.deepStrictEqual(sampled, [10, 30, 40], 'sampled values should match deterministic indices');

        // Edge case: empty input array should always return an empty array
        const emptySample = simple_statistics.sampleWithReplacement([], 5);
        assert.deepStrictEqual(emptySample, [], 'sampling from an empty array should return []');

        done();
    });
});