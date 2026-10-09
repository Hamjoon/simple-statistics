The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.ckmeans', function(done) {
        // 1. Basic clustering example
        const data = [1, 2, 4, 5, 7, 9, 10, 20];
        const clusters = simple_statistics.ckmeans(data, 3);
        const expected = [
            [1, 2, 4, 5, 7, 9],
            [10],
            [20]
        ];
        assert.deepStrictEqual(clusters, expected, 'ckmeans should produce the expected clusters');

        // 2. All identical values – should return a single cluster regardless of nClusters
        const identical = [5, 5, 5, 5];
        const identicalClusters = simple_statistics.ckmeans(identical, 2);
        const expectedIdentical = [[5, 5, 5, 5]];
        assert.deepStrictEqual(identicalClusters, expectedIdentical, 'identical values should yield one cluster');

        // 3. Requesting more clusters than data points – should throw an error
        assert.throws(
            () => simple_statistics.ckmeans([1, 2, 3], 5),
            /cannot generate more classes than there are data values/,
            'ckmeans should throw when nClusters > data length'
        );

        done();
    });
});
``` 
failed with the following error message:
```
ckmeans should produce the expected clusters
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