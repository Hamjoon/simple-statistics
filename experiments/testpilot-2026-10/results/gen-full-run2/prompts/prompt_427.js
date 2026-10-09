Your task is to write a test for the following function
```
// Calculate the [silhouette values](https://en.wikipedia.org/wiki/Silhouette_(clustering))
// for clustered data.
// @param {Array<Array<number>>} points N-dimensional coordinates of points.
// @param {Array<number>} labels Labels of points. This must be the same length as `points`,
// and values must lie in [0..G-1], where G is the number of groups.
// @return {Array<number>} The silhouette value for each point.
// @example
// silhouette([[0.25], [0.75]], [0, 0]); // => [1.0, 1.0]

simple-statistics.silhouette(points, labels)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.silhouette', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```