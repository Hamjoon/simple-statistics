```javascript
let mocha = require('mocha');
let assert = require('assert');

/**
 * Deterministic sampling function that mimics simple-statistics.sample
 * but uses the provided random function directly.
 *
 * @param {Array} arr   The source array (will not be mutated).
 * @param {number} size Number of elements to sample.
 * @param {function} rand A function that returns a number in [0, 1).
 * @returns {Array} The sampled elements.
 */
function deterministicSample(arr, size, rand) {
    // Clone the original array so we don't mutate it.
    const copy = arr.slice();
    const result = [];

    // Ensure we don't request more items than are available.
    const actualSize = Math.min(size, copy.length);

    for (let i = 0; i < actualSize; i++) {
        // Pick an index based on the supplied random function.
        const idx = Math.floor(rand() * copy.length);
        // Remove the element at the chosen index and store it.
        result.push(copy.splice(idx, 1)[0]);
    }

    return result;
}

describe('test deterministic sampling', function () {
    it('test deterministicSample', function (done) {
        // deterministic random source that always returns 0 (select first element each time)
        const data = [10, 20, 30, 40, 50];
        const sampleFirst = deterministicSample(data, 3, () => 0);
        // Should return the first three elements in order
        assert.deepStrictEqual(sampleFirst, [10, 20, 30]);

        // Ensure the original array is unchanged
        assert.deepStrictEqual(data, [10, 20, 30, 40, 50]);

        // deterministic random source that always returns a value close to 1 (select last element each time)
        const sampleLast = deterministic