Your task is to write a test for the following function
```
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