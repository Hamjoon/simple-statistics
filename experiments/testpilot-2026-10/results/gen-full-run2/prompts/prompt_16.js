Your task is to write a test for the following function
```
// Generate a score of how well this item matches all
// possible categories based on its attributes
// @param {Object} item an item in the same format as with train
// @returns {Object} of probabilities that this item belongs to a
// given category.

simple-statistics.BayesianClassifier.prototype.score(item)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier.prototype.score', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```