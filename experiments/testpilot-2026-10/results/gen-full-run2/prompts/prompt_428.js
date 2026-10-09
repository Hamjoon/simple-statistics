The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.silhouette', function(done) {
        // Case 1: two points in the same cluster (example from docs)
        let points1 = [[0.25], [0.75]];
        let labels1 = [0, 0];
        let result1 = simple_statistics.silhouette(points1, labels1);
        assert.deepStrictEqual(result1, [1.0, 1.0]);

        // Case 2: two points in different clusters
        let points2 = [[0], [10]];
        let labels2 = [0, 1];
        let result2 = simple_statistics.silhouette(points2, labels2);
        assert.deepStrictEqual(result2, [1.0, 1.0]);

        // Case 3: three points, two clusters
        // Cluster 0: [0], [2]; Cluster 1: [10]
        let points3 = [[0], [2], [10]];
        let labels3 = [0, 0, 1];
        let result3 = simple_statistics.silhouette(points3, labels3);
        // Expected values (computed manually)
        // point 0: a = 2, b = 10, s = (10-2)/10 = 0.8
        // point 1: a = 2, b = 8,  s = (8-2)/8  = 0.75
        // point 2: a = 0, b = 9,  s = (9-0)/9  = 1.0
        let expected3 = [0.8, 0.75, 1.0];
        for (let i = 0; i < result3.length; i++) {
            assert.ok(Math.abs(result3[i] - expected3[i]) < 1e-12,
                `Silhouette value at index ${i} expected ${expected3[i]}, got ${result3[i]}`);
        }

        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly deep-equal:
+ actual - expected

  [
+   0,
+   0
-   1,
-   1
  ]
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.