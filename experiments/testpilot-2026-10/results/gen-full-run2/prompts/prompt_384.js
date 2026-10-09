The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleRankCorrelation', function(done) {
        // Perfect positive correlation
        const xPos = [10, 20, 30, 40, 50];
        const yPos = [1, 2, 3, 4, 5];
        const corrPos = simple_statistics.sampleRankCorrelation(xPos, yPos);
        assert.strictEqual(corrPos, 1, 'Expected correlation of 1 for perfectly increasing sequences');

        // Perfect negative correlation
        const xNeg = [1, 2, 3, 4, 5];
        const yNeg = [5, 4, 3, 2, 1];
        const corrNeg = simple_statistics.sampleRankCorrelation(xNeg, yNeg);
        assert.strictEqual(corrNeg, -1, 'Expected correlation of -1 for perfectly decreasing sequences');

        // No correlation (random order)
        const xZero = [1, 2, 3, 4, 5];
        const yZero = [2, 5, 1, 4, 3];
        const corrZero = simple_statistics.sampleRankCorrelation(xZero, yZero);
        // For this specific data the exact Spearman correlation is 0
        // Compute expected value manually:
        // Ranks for x: [0,1,2,3,4]
        // Ranks for y after sorting: values sorted => [1,2,3,4,5] original indexes => [2,0,4,3,1]
        // So yRanks = [1,4,0,3,2]
        // Compute Pearson correlation of [0,1,2,3,4] and [1,4,0,3,2] => should be 0
        assert.strictEqual(corrZero, 0, 'Expected correlation of 0 for uncorrelated sequences');

        done();
    });
});
``` 
failed with the following error message:
```
Expected correlation of 1 for perfectly increasing sequences
+ actual - expected

+ 0.9999999999999999
- 1
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.