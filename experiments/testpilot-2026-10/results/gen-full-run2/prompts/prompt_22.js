Your task is to write a test for the following function
```
// This is a single-layer [Perceptron Classifier](http://en.wikipedia.org/wiki/Perceptron) that takes
// arrays of numbers and predicts whether they should be classified
// as either 0 or 1 (negative or positive examples).
// @class
// @example
// // Create the model
// var p = new PerceptronModel();
// // Train the model with input with a diagonal boundary.
// for (var i = 0; i < 5; i++) {
// p.train([1, 1], 1);
// p.train([0, 1], 0);
// p.train([1, 0], 0);
// p.train([0, 0], 0);
// }
// p.predict([0, 0]); // 0
// p.predict([0, 1]); // 0
// p.predict([1, 0]); // 0
// p.predict([1, 1]); // 1

simple-statistics.PerceptronModel()
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.PerceptronModel', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```