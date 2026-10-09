Your task is to write a test for the following function
```
// Split an array into chunks of a specified size. 
This function
// has the same behavior as [PHP's array_chunk](http://php.net/manual/en/function.array-chunk.php)
// function, and thus will insert smaller-sized chunks at the end if
// the input size is not divisible by the chunk size.
// `x` is expected to be an array, and `chunkSize` a number.
// The `x` array can contain any kind of data.
// @param {Array} x a sample
// @param {number} chunkSize size of each output array. must be a positive integer
// @returns {Array<Array>} a chunked array
// @throws {Error} if chunk size is less than 1 or not an integer
// @example
// chunk([1, 2, 3, 4, 5, 6], 2);
// // => [[1, 2], [3, 4], [5, 6]]

simple-statistics.chunk(x, chunkSize)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.chunk', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```