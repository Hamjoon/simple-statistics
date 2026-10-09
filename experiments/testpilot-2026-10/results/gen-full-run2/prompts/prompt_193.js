Your task is to write a test for the following function
```
// Perform k-means clustering.
// @param {Array<Array<number>>} points N-dimensional coordinates of points to be clustered.
// @param {number} numCluster How many clusters to create.
// @param {Function} randomSource An optional entropy source that generates uniform values in [0, 1).
// @return {kMeansReturn} Labels (same length as data) and centroids (same length as numCluster).
// @throws {Error} If any centroids wind up friendless (i.e., without associated points).
// @example
// kMeansCluster([[0.0, 0.5], [1.0, 0.5]], 2); // => {labels: [0, 1], centroids: [[0.0, 0.5], [1.0 0.5]]}

simple-statistics.kMeansCluster(points, numCluster, randomSource)
```

This function is defined as follows:
```
function kMeansCluster(points, numCluster, randomSource) {
    if ( randomSource === void 0 ) randomSource = Math.random;

    var oldCentroids = null;
    var newCentroids = sample(points, numCluster, randomSource);
    var labels = null;
    var change = Number.MAX_VALUE;
    while (change !== 0) {
        labels = labelPoints(points, newCentroids);
        oldCentroids = newCentroids;
        newCentroids = calculateCentroids(points, labels, numCluster);
        change = calculateChange(newCentroids, oldCentroids);
    }
    return {
        labels: labels,
        centroids: newCentroids
    };
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.kMeansCluster', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```