The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileRankSorted', function(done) {
        // Sorted array for testing
        const sorted = [0, 10, 20, 30, 40];

        // Exact match: value = 20 should be at rank 0.5 (2 / (5-1))
        let rank = simple_statistics.quantileRankSorted(sorted, 20);
        assert.strictEqual(rank, 0.5);

        // Interpolated value: 15 lies halfway between 10 and 20
        // Expected rank = (1 + 0.5) / 4 = 0.375
        rank = simple_statistics.quantileRankSorted(sorted, 15);
        assert.ok(Math.abs(rank - 0.375) < 1e-12, `Expected 0.375, got ${rank}`);

        // Value below the minimum should return 0
        rank = simple_statistics.quantileRankSorted(sorted, -5);
        assert.strictEqual(rank, 0);

        // Value above the maximum should return 1
        rank = simple_statistics.quantileRankSorted(sorted, 100);
        assert.strictEqual(rank, 1);

        // Edge case: first element (0) should be rank 0
        rank = simple_statistics.quantileRankSorted(sorted, 0);
        assert.strictEqual(rank, 0);

        // Edge case: last element (40) should be rank 1
        rank = simple_statistics.quantileRankSorted(sorted, 40);
        assert.strictEqual(rank, 1);

        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:

0.6 !== 0.5
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.