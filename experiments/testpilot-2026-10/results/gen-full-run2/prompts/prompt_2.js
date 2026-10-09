Your task is to write a test for the following function
```
// [Bayesian Classifier](http://en.wikipedia.org/wiki/Naive_Bayes_classifier)
// This is a naïve bayesian classifier that takes
// singly-nested objects.
// @class
// @example
// var bayes = new BayesianClassifier();
// bayes.train({
// species: 'Cat'
// }, 'animal');
// var result = bayes.score({
// species: 'Cat'
// })
// // result
// // {
// //   animal: 1
// // }

simple-statistics.BayesianClassifier()
```

This function is defined as follows:
```
function BayesianClassifier() {
    // The number of items that are currently
    // classified in the model
    this.totalCount = 0;
    // Every item classified in the model
    this.data = {};
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```