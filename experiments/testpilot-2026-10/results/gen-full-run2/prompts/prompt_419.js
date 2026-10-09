Your task is to write a test for the following function
```
// [Sign](https://en.wikipedia.org/wiki/Sign_function) is a function
// that extracts the sign of a real number
// @param {number} x input value
// @returns {number} sign value either 1, 0 or -1
// @throws {TypeError} if the input argument x is not a number
// @private
// @example
// sign(2); // => 1

simple-statistics.sign(x)
```

This function is defined as follows:
```
function sign(x) {
    if (typeof x === "number") {
        if (x < 0) {
            return -1;
        } else if (x === 0) {
            return 0;
        } else {
            return 1;
        }
    } else {
        throw new TypeError("not a number");
    }
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sign', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```