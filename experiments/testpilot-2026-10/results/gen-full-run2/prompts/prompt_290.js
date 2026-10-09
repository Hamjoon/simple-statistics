Your task is to write a test for the following function
```
// Conducts a [permutation test](https://en.wikipedia.org/wiki/Resampling_(statistics)#Permutation_tests)
// to determine if two data sets are *significantly* different from each other, using
// the difference of means between the groups as the test statistic.
// The function allows for the following hypotheses:
// - two_tail = Null hypothesis: the two distributions are equal.
// - greater = Null hypothesis: observations from sampleX tend to be smaller than those from sampleY.
// - less = Null hypothesis: observations from sampleX tend to be greater than those from sampleY.
// [Learn more about one-tail vs two-tail tests.](https://en.wikipedia.org/wiki/One-_and_two-tailed_tests)
// @param {Array<number>} sampleX first dataset (e.g. treatment data)
// @param {Array<number>} sampleY second dataset (e.g. control data)
// @param {string} alternative alternative hypothesis, either 'two_sided' (default), 'greater', or 'less'
// @param {number} k number of values in permutation distribution.
// @param {Function} [randomSource=Math.random] an optional entropy source
// @returns {number} p-value The probability of observing the difference between groups (as or more extreme than what we did), assuming the null hypothesis.
// @example
// var control = [2, 5, 3, 6, 7, 2, 5];
// var treatment = [20, 5, 13, 12, 7, 2, 2];
// permutationTest(control, treatment); // ~0.1324

simple-statistics.permutationTest(sampleX, sampleY, alternative, k, randomSource)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.permutationTest', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```