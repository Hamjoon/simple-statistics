Your task is to write a test for the following function
```
simple-statistics.logAverage(x)
```

This function is defined as follows:
```
function logAverage(x) {
    if (x.length === 0) {
        throw new Error("logAverage requires at least one data point");
    }

    var value = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            throw new Error(
                "logAverage requires only non-negative numbers as input"
            );
        }
        value += Math.log(x[i]);
    }

    return Math.exp(value / x.length);
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.logAverage', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```