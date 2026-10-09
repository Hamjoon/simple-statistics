Your task is to write a test for the following function
```
// The [mode](https://en.wikipedia.org/wiki/Mode_%28statistics%29) is the number
// that appears in a list the highest number of times.
// There can be multiple modes in a list: in the event of a tie, this
// algorithm will return the most recently seen mode.
// modeFast uses a Map object to keep track of the mode, instead of the approach
// used with `mode`, a sorted array. As a result, it is faster
// than `mode` and supports any data type that can be compared with `==`.
// It also requires a
// [JavaScript environment with support for Map](https://kangax.github.io/compat-table/es6/#test-Map),
// and will throw an error if Map is not available.
// This is a [measure of central tendency](https://en.wikipedia.org/wiki/Central_tendency):
// a method of finding a typical or central value of a set of numbers.
// @param {Array<*>} x a sample of one or more data points
// @returns {?*} mode
// @throws {ReferenceError} if the JavaScript environment doesn't support Map
// @throws {Error} if x is empty
// @example
// modeFast(['rabbits', 'rabbits', 'squirrels']); // => 'rabbits'

simple-statistics.modeFast(x)
```

This function is defined as follows:
```
function modeFast(x) {
    // This index will reflect the incidence of different values, indexing
    // them like
    // { value: count }
    var index = new Map();

    // A running `mode` and the number of times it has been encountered.
    var mode;
    var modeCount = 0;

    for (var i = 0; i < x.length; i++) {
        var newCount = index.get(x[i]);
        if (newCount === undefined) {
            newCount = 1;
        } else {
            newCount++;
        }
        if (newCount > modeCount) {
            mode = x[i];
            modeCount = newCount;
        }
        index.set(x[i], newCount);
    }

    if (modeCount === 0) {
        throw new Error("mode requires at last one data point");
    }

    return mode;
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.modeFast', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```