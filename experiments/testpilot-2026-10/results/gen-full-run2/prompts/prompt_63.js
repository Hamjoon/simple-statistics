Your task is to write a test for the following function
```
// The [Binomial Distribution](http://en.wikipedia.org/wiki/Binomial_distribution) is the discrete probability
// distribution of the number of successes in a sequence of n independent yes/no experiments, each of which yields
// success with probability `probability`. Such a success/failure experiment is also called a Bernoulli experiment or
// Bernoulli trial; when trials = 1, the Binomial Distribution is a Bernoulli Distribution.
// @param {number} trials number of trials to simulate
// @param {number} probability
// @returns {number[]} output

simple-statistics.binomialDistribution(trials, probability)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.binomialDistribution', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```