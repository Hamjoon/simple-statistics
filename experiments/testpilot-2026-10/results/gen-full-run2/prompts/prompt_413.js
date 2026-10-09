Your task is to write a test for the following function
```
// A [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
// in-place - which means that it **will change the order of the original
// array by reference**.
// This is an algorithm that generates a random [permutation](https://en.wikipedia.org/wiki/Permutation)
// of a set.
// @param {Array} x sample of one or more numbers
// @param {Function} [randomSource=Math.random] an optional entropy source that
// returns numbers between 0 inclusive and 1 exclusive: the range [0, 1)
// @returns {Array} x
// @example
// var x = [1, 2, 3, 4];
// shuffleInPlace(x);
// // x is shuffled to a value like [2, 1, 4, 3]

simple-statistics.shuffleInPlace(x, randomSource)
```

This function is defined as follows:
```
function shuffleInPlace(x, randomSource) {
    // a custom random number source can be provided if you want to use
    // a fixed seed or another random number generator, like
    // [random-js](https://www.npmjs.org/package/random-js)
    randomSource = randomSource || Math.random;

    // store the current length of the x to determine
    // when no elements remain to shuffle.
    var length = x.length;

    // temporary is used to hold an item when it is being
    // swapped between indices.
    var temporary;

    // The index to swap at each stage.
    var index;

    // While there are still items to shuffle
    while (length > 0) {
        // choose a random index within the subset of the array
        // that is not yet shuffled
        index = Math.floor(randomSource() * length--);

        // store the value that we'll move temporarily
        temporary = x[length];

        // swap the value at `x[length]` with `x[index]`
        x[length] = x[index];
        x[index] = temporary;
    }

    return x;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.shuffleInPlace', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```