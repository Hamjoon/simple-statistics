Your task is to write a test for the following function
```
// A [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
// is a fast way to create a random permutation of a finite set. This is
// a function around `shuffle_in_place` that adds the guarantee that
// it will not modify its input.
// @param {Array} x sample of 0 or more numbers
// @param {Function} [randomSource=Math.random] an optional entropy source that
// returns numbers between 0 inclusive and 1 exclusive: the range [0, 1)
// @return {Array} shuffled version of input
// @example
// var shuffled = shuffle([1, 2, 3, 4]);
// shuffled; // = [2, 3, 1, 4] or any other random permutation

simple-statistics.shuffle(x, randomSource)
```

This function is defined as follows:
```
function shuffle(x, randomSource) {
    // slice the original array so that it is not modified
    var sample = x.slice();

    // and then shuffle that shallow-copied array, in place
    return shuffleInPlace(sample, randomSource);
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.shuffle', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```