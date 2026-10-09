Your task is to write a test for the following function
```
// Ckmeans clustering is an improvement on heuristic-based clustering
// approaches like Jenks. The algorithm was developed in
// [Haizhou Wang and Mingzhou Song](http://journal.r-project.org/archive/2011-2/RJournal_2011-2_Wang+Song.pdf)
// as a [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) approach
// to the problem of clustering numeric data into groups with the least
// within-group sum-of-squared-deviations.
// Minimizing the difference within groups - what Wang & Song refer to as
// `withinss`, or within sum-of-squares, means that groups are optimally
// homogenous within and the data is split into representative groups.
// This is very useful for visualization, where you may want to represent
// a continuous variable in discrete color or style groups. 
This function
// can provide groups that emphasize differences between data.
// Being a dynamic approach, this algorithm is based on two matrices that
// store incrementally-computed values for squared deviations and backtracking
// indexes.
// This implementation is based on Ckmeans 3.4.6, which introduced a new divide
// and conquer approach that improved runtime from O(kn^2) to O(kn log(n)).
// Unlike the [original implementation](https://cran.r-project.org/web/packages/Ckmeans.1d.dp/index.html),
// this implementation does not include any code to automatically determine
// the optimal number of clusters: this information needs to be explicitly
// provided.
// ### References
// _Ckmeans.1d.dp: Optimal k-means Clustering in One Dimension by Dynamic
// Programming_ Haizhou Wang and Mingzhou Song ISSN 2073-4859
// from The R Journal Vol. 3/2, December 2011
// @param {Array<number>} x input data, as an array of number values
// @param {number} nClusters number of desired classes. This cannot be
// greater than the number of values in the data array.
// @returns {Array<Array<number>>} clustered input
// @throws {Error} if the number of requested clusters is higher than the size of the data
// @example
// ckmeans([-1, 2, -1, 2, 4, 5, 6, -1, 2, -1], 3);
// // The input, clustered into groups of similar numbers.
// //= [[-1, -1, -1, -1], [2, 2, 2], [4, 5, 6]]);

simple-statistics.ckmeans(x, nClusters)
```
This function is defined as follows:
```
function ckmeans(x, nClusters) {
    if (nClusters > x.length) {
        throw new Error(
            "cannot generate more classes than there are data values"
        );
    }

    var sorted = numericSort(x);
    // we'll use this as the maximum number of clusters
    var uniqueCount = uniqueCountSorted(sorted);

    // if all of the input values are identical, there's one cluster
    // with all of the input in it.
    if (uniqueCount === 1) {
        return [sorted];
    }

    // named 'S' originally
    var matrix = makeMatrix(nClusters, sorted.length);
    // named 'J' originally
    var backtrackMatrix = makeMatrix(nClusters, sorted.length);

    // This is a dynamic programming way to solve the problem of minimizing
    // within-cluster sum of squares. It's similar to linear regression
    // in this way, and this calculation incrementally computes the
    // sum of squares that are later read.
    fillMatrices(sorted, matrix, backtrackMatrix);

    // The real work of Ckmeans clustering happens in the matrix generation:
    // the generated matrices encode all possible clustering combinations, and
    // once they're generated we can solve for the best clustering groups
    // very quickly.
    var clusters = [];
    var clusterRight = backtrackMatrix[0].length - 1;

    // Backtrack the clusters from the dynamic programming matrix. This
    // starts at the bottom-right corner of the matrix (if the top-left is 0, 0),
    // and moves the cluster target with the loop.
    for (var cluster = backtrackMatrix.length - 1; cluster >= 0; cluster--) {
        var clusterLeft = backtrackMatrix[cluster][clusterRight];

        // fill the cluster from the sorted input by taking a slice of the
        // array. the backtrack matrix makes this easy - it stores the
        // indexes where the cluster should start and end.
        clusters[cluster] = sorted.slice(clusterLeft, clusterRight + 1);

        if (cluster > 0) {
            clusterRight = clusterLeft - 1;
        }
    }

    return clusters;
}
```

You may use the following examples to guide your implementation:
```
// usage #1
ss.ckmeans([1, 2, 4, 5, 7, 9, 10, 20], 3))[ [ 1,    2,    4,    5,    7,    9 ],  [ 10 ],  [ 20 ] ]
// usage #2
var breaks = ss.ckmeans([1, 2, 4, 5, 7, 9, 10, 20], 3)).map(function(cluster) {  return cluster[0];});
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.ckmeans', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```