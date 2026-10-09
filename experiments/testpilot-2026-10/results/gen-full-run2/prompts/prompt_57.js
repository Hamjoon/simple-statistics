Your task is to write a test for the following function
```
// The [Bernoulli distribution](http://en.wikipedia.org/wiki/Bernoulli_distribution)
// is the probability discrete
// distribution of a random variable which takes value 1 with success
// probability `p` and value 0 with failure
// probability `q` = 1 - `p`. It can be used, for example, to represent the
// toss of a coin, where "1" is defined to mean "heads" and "0" is defined
// to mean "tails" (or vice versa). It is
// a special case of a Binomial Distribution
// where `n` = 1.
// @param {number} p input value, between 0 and 1 inclusive
// @returns {number[]} values of bernoulli distribution at this point
// @throws {Error} if p is outside 0 and 1
// @example
// bernoulliDistribution(0.3); // => [0.7, 0.3]

simple-statistics.bernoulliDistribution(p)
```

This function is defined as follows:
```
function bernoulliDistribution(p) /*: number[] */ {
    // Check that `p` is a valid probability (0 ≤ p ≤ 1)
    if (p < 0 || p > 1) {
        throw new Error(
            "bernoulliDistribution requires probability to be between 0 and 1 inclusive"
        );
    }

    return [1 - p, p];
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.bernoulliDistribution', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```