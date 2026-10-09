Your task is to write a test for the following function
```
// The [median](http://en.wikipedia.org/wiki/Median) is
// the middle number of a list. This is often a good indicator of 'the middle'
// when there are outliers that skew the `mean()` value.
// This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
// a method of finding a typical or central value of a set of numbers.
// The median isn't necessarily one of the elements in the list: the value
// can be the average of two elements if the list has an even length
// and the two central values are different.
// @param {Array<number>} x input
// @returns {number} median value
// @example
// median([10, 2, 5, 100, 2, 1]); // => 3.5

simple-statistics.median(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.median', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```