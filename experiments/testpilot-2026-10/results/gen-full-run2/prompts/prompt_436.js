The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.silhouetteMetric', function(done) {
        // Simple case: two points in the same cluster
        const points1 = [[0.25], [0.75]];
        const labels1 = [0, 0];
        const metric1 = simple_statistics.silhouetteMetric(points1, labels1);
        assert.strictEqual(metric1, 1.0);

        // Two points in different clusters
        const points2 = [[0], [10]];
        const labels2 = [0, 1];
        const metric2 = simple_statistics.silhouetteMetric(points2, labels2);
        assert.strictEqual(metric2, 1.0);

        // Three points, mixed clusters
        const points3 = [[0], [1], [5]];
        const labels3 = [0, 0, 1];
        const metric3 = simple_statistics.silhouetteMetric(points3, labels3);
        // The silhouette metric should be within the valid range [0, 1]
        assert.ok(metric3 >= 0 && metric3 <= 1);

        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:

0 !== 1
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.