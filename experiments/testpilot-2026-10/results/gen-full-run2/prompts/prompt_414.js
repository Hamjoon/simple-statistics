The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.shuffleInPlace', function(done) {
        // deterministic random source returning a predefined sequence
        const sequence = [0.5, 0.1, 0.9, 0.0];
        let i = 0;
        const deterministicRandom = () => sequence[i++] !== undefined ? sequence[i-1] : 0;

        // test with a normal array
        const arr = [1, 2, 3, 4];
        const result = simple_statistics.shuffleInPlace(arr.slice(), deterministicRandom);
        // Expected order after applying the above sequence to the Fisher‑Yates algorithm
        const expected = [4, 2, 1, 3];
        assert.deepStrictEqual(result, expected, 'shuffleInPlace should produce the expected permutation');

        // test that the original array is mutated (in‑place)
        const original = [5, 6, 7];
        const copy = original.slice();
        simple_statistics.shuffleInPlace(original, () => 0); // always pick index 0 → reverse order
        assert.notStrictEqual(original, copy, 'array should be shuffled in place');
        assert.deepStrictEqual(original, [7, 6, 5], 'array should be reversed when random always returns 0');

        // test edge cases
        assert.deepStrictEqual(simple_statistics.shuffleInPlace([], deterministicRandom), [], 'empty array stays empty');
        assert.deepStrictEqual(simple_statistics.shuffleInPlace([42], deterministicRandom), [42], 'single‑element array stays unchanged');

        done();
    });
});
``` 
failed with the following error message:
```
array should be reversed when random always returns 0
+ actual - expected

  [
+   6,
    7,
-   6,
    5
  ]
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.