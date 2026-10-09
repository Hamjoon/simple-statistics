Your task is to write a test for the following function
```
// The [Geometric Mean](https://en.wikipedia.org/wiki/Geometric_mean) is
// a mean function that is more useful for numbers in different
// ranges.
// This is the nth root of the input numbers multiplied by each other.
// The geometric mean is often useful for
// **[proportional growth](https://en.wikipedia.org/wiki/Geometric_mean#Proportional_growth)**: given
// growth rates for multiple years, like _80%, 16.66% and 42.85%_, a simple
// mean will incorrectly estimate an average growth rate, whereas a geometric
// mean will correctly estimate a growth rate that, over those years,
// will yield the same end value.
// This runs in `O(n)`, linear time, with respect to the length of the array.
// @param {Array<number>} x sample of one or more data points
// @returns {number} geometric mean
// @throws {Error} if x is empty
// @throws {Error} if x contains a negative number
// @example
// var growthRates = [1.80, 1.166666, 1.428571];
// var averageGrowth = ss.geometricMean(growthRates);
// var averageGrowthRates = [averageGrowth, averageGrowth, averageGrowth];
// var startingValue = 10;
// var startingValueMean = 10;
// growthRates.forEach(function(rate) {
// startingValue *= rate;
// });
// averageGrowthRates.forEach(function(rate) {
// startingValueMean *= rate;
// });
// startingValueMean === startingValue;

simple-statistics.geometricMean(x)
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.geometricMean', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```