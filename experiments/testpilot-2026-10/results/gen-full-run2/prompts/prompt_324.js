The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantile', function(done) {
        // Unsorted sample data
        const sample = [15, 3, 20, 6, 9, 8, 13, 7, 16, 8, 10];
        // Expected results based on the population quantile algorithm
        const expectedMedian = 9; // 0.5 quantile
        const expectedArray = [3, 7.5, 9, 14, 20]; // quantiles for p = [0,0.25,0.5,0.75,1]

        // Single quantile test
        const median = simple_statistics.quantile(sample, 0.5);
        assert.strictEqual(median, expectedMedian, 'Median should be 9');

        // Multiple quantiles test
        const probs = [0, 0.25, 0.5, 0.75, 1];
        const quantiles = simple_statistics.quantile(sample, probs);
        assert.deepStrictEqual(quantiles, expectedArray, 'Quantiles array does not match expected values');

        done();
    });
});
``` 
failed with the following error message:
```
Quantiles array does not match expected values
+ actual - expected

  [
    3,
+   7,
-   7.5,
    9,
+   15,
-   14,
    20
  ]
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.