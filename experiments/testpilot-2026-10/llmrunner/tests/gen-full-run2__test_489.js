let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleWithReplacement', function(done) {
        // Test sampling with a deterministic random source
        const data = [10, 20, 30];
        const predetermined = [0.1, 0.6, 0.9, 0.2, 0.5]; // will map to indices 0,1,2,0,1
        let idx = 0;
        const randomSource = () => predetermined[idx++];
        const sampled = simple_statistics.sampleWithReplacement(data, 5, randomSource);
        assert.deepStrictEqual(sampled, [10, 20, 30, 10, 20]);

        // Test that an empty input array returns an empty array
        const emptySample = simple_statistics.sampleWithReplacement([], 3);
        assert.deepStrictEqual(emptySample, []);

        done();
    });
});