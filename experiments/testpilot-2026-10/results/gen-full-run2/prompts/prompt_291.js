The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.permutationTest', function(done) {
        // Simple deterministic test: with k = 1 and a random source that never causes a swap,
        // the permutation will be identical to the original ordering, so the observed
        // statistic is always counted as extreme, yielding a p‑value of 1.
        const sampleX = [1, 2, 3];
        const sampleY = [4, 5, 6];
        const deterministicRandom = () => 0.9999999999; // j = i in Fisher–Yates → no change
        const pValue = simple_statistics.permutationTest(
            sampleX,
            sampleY,
            'two_sided',
            1,
            deterministicRandom
        );
        assert.strictEqual(pValue, 1);
        done();
    });
});
``` 
failed with the following error message:
```
`alternative` must be either 'two_side', 'greater', or 'less'.  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.