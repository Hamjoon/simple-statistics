let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleWithReplacement', function(done) {
        // deterministic random source that yields a known sequence
        const values = [10, 20, 30, 40];
        const sequence = [0.1, 0.6, 0.9]; // will produce indices 0,2,3
        let idx = 0;
        const deterministicRandom = () => {
            const val = sequence[idx % sequence.length];
            idx++;
            return val;
        };

        const result = simple_statistics.sampleWithReplacement(values, 3, deterministicRandom);
        // Expected result based on the deterministic sequence
        const expected = [10, 30, 40];
        assert.deepStrictEqual(result, expected, 'sampleWithReplacement should return the expected deterministic sample');
        // Also verify length matches requested n
        assert.strictEqual(result.length, 3, 'Result length should be equal to n');
        done();
    });
});