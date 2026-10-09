Your task is to write a test for the following function
```
simple-statistics.ckmeans(x, nClusters)
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