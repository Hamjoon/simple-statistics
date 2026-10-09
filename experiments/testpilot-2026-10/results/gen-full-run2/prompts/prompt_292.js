The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.permutationTest', function(done) {
        // Simple data where the two groups have clearly different means
        const sampleX = [1, 2, 3];
        const sampleY = [4, 5, 6];

        // Two‑sided test – the exact p‑value (enumerating all 20 permutations) is 0.1.
        // With a large number of random permutations the estimate should be close.
        const pTwoSided = simple_statistics.permutationTest(sampleX, sampleY, 'two-sided', 10000);
        // Allow a small tolerance because the result is estimated via random sampling.
        assert(pTwoSided > 0 && pTwoSided < 0.2, `Two‑sided p‑value ${pTwoSided} should be between 0 and 0.2`);

        // One‑sided test (sampleX < sampleY) – exact p‑value is 0.05.
        const pLess = simple_statistics.permutationTest(sampleX, sampleY, 'less', 10000);
        assert(pLess > 0 && pLess < 0.1, `One‑sided (less) p‑value ${pLess} should be between 0 and 0.1`);

        // One‑sided test (sampleX > sampleY) – should be very small (≈0.05 for the opposite direction).
        const pGreater = simple_statistics.permutationTest(sampleX, sampleY, 'greater', 10000);
        assert(pGreater > 0 && pGreater < 0.1, `One‑sided (greater) p‑value ${pGreater} should be between 0 and 0.1`);

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