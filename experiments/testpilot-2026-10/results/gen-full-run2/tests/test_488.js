let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleWithReplacement', function(done) {
        // Input data
        const x = [1, 2, 3, 4];
        const n = 5;

        // Deterministic random source returning a known sequence
        const randomValues = [0, 0.5, 0.99, 0.2, 0.7];
        let callCount = 0;
        function deterministicRandom() {
            return randomValues[callCount++];
        }

        // Expected result based on floor(random * x.length)
        // floor(0 * 4) = 0 -> 1
        // floor(0.5 * 4) = 2 -> 3
        // floor(0.99 * 4) = 3 -> 4
        // floor(0.2 * 4) = 0 -> 1
        // floor(0.7 * 4) = 2 -> 3
        const expected = [1, 3, 4, 1, 3];

        // Run the function under test
        const result = simple_statistics.sampleWithReplacement(x, n, deterministicRandom);

        // Assertions
        assert.deepStrictEqual(result, expected, 'The sampled array does not match the expected deterministic output');
        assert.strictEqual(result.length, n, 'The result length should equal n');
        // Ensure every element is from the original array
        result.forEach(v => {
            assert.ok(x.includes(v), `Sampled value ${v} is not in the original array`);
        });

        done();
    });
});