let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sample', function(done) {
        const original = [1, 2, 3, 4, 5];
        const n = 3;

        // deterministic random source – cycles through a fixed set of values
        const deterministicValues = [0.9, 0.2, 0.5, 0.1, 0.8];
        let callCount = 0;
        const randomSource = () => {
            const value = deterministicValues[callCount % deterministicValues.length];
            callCount++;
            return value;
        };

        // Run the function under test
        const sampled = simple_statistics.sample(original, n, randomSource);

        // Re‑run shuffle with the same deterministic source to obtain the expected order
        callCount = 0; // reset the source
        const shuffled = simple_statistics.shuffle(original, randomSource);
        const expected = shuffled.slice(0, n);

        // Assertions
        assert.deepStrictEqual(sampled, expected, 'sample should return the first n elements of the shuffled array');
        assert.strictEqual(sampled.length, n, 'sample should return exactly n elements');
        sampled.forEach(v => assert.ok(original.includes(v), 'each sampled element must come from the original array'));

        done();
    });
});