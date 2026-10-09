Your task is to write a test for the following function
```
simple-statistics.inverseErrorFunction(x)
```

This function is defined as follows:
```
function inverseErrorFunction(x) {
    var a = (8 * (Math.PI - 3)) / (3 * Math.PI * (4 - Math.PI));

    var inv = Math.sqrt(
        Math.sqrt(
            Math.pow(2 / (Math.PI * a) + Math.log(1 - x * x) / 2, 2) -
                Math.log(1 - x * x) / a
        ) -
            (2 / (Math.PI * a) + Math.log(1 - x * x) / 2)
    );

    if (x >= 0) {
        return inv;
    } else {
        return -inv;
    }
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.inverseErrorFunction', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```