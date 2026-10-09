Your task is to write a test for the following function
```
// Implementation of [Heap's Algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
// for generating permutations.
// @param {Array} elements any type of data
// @returns {Array<Array>} array of permutations

simple-statistics.permutationsHeap(elements)
```

This function is defined as follows:
```
function permutationsHeap(elements) {
    var indexes = new Array(elements.length);
    var permutations = [elements.slice()];

    for (var i = 0; i < elements.length; i++) {
        indexes[i] = 0;
    }

    for (var i$1 = 0; i$1 < elements.length; ) {
        if (indexes[i$1] < i$1) {
            // At odd indexes, swap from indexes[i] instead
            // of from the beginning of the array
            var swapFrom = 0;
            if (i$1 % 2 !== 0) {
                swapFrom = indexes[i$1];
            }

            // swap between swapFrom and i, using
            // a temporary variable as storage.
            var temp = elements[swapFrom];
            elements[swapFrom] = elements[i$1];
            elements[i$1] = temp;

            permutations.push(elements.slice());
            indexes[i$1]++;
            i$1 = 0;
        } else {
            indexes[i$1] = 0;
            i$1++;
        }
    }

    return permutations;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.permutationsHeap', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```