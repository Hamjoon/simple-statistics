The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.ckmeans', function(done) {
        // Basic functionality test
        const data = [1, 2, 4, 5, 7, 9, 10, 20];
        const k = 3;
        const expected = [[1, 2, 4, 5, 7, 9], [10], [20]];
        const result = simple_statistics.ckmeans(data, k);
        assert.deepStrictEqual(result, expected, 'ckmeans should return the expected clusters');

        // Verify that the first element of each cluster can be used as a break point
        const breaks = result.map(cluster => cluster[0]);
        const expectedBreaks = [1, 10, 20];
        assert.deepStrictEqual(breaks, expectedBreaks, 'break points should match the first elements of each cluster');

        // Error handling: requesting more clusters than data points should throw
        assert.throws(
            () => simple_statistics.ckmeans([1, 2, 3], 5),
            /Error/,
            'ckmeans should throw an error when nClusters > data length'
        );

        done();
    });
});
``` 
failed with the following error message:
```
ckmeans should return the expected clusters
+ actual - expected

  [
    [
      1,
      2,
      4,
      5,
+   ],
+   [
      7,
      9,
-   ],
-   [
      10
    ],
    [
      20
    ]
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.