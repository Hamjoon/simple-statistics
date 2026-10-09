Your task is to write a test for the following function
```
// **Train** the classifier with a new example, which is
// a numeric array of features and a 0 or 1 label.
// @param {Array<number>} features an array of features as numbers
// @param {number} label either 0 or 1
// @returns {PerceptronModel} this

simple-statistics.PerceptronModel.prototype.train(features, label)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.PerceptronModel.prototype.train', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```