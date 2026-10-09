Your task is to write a test for the following function
```
simple-statistics.gamma(n)
```

This function is defined as follows:
```
function gamma(n) {
    if (Number.isInteger(n)) {
        if (n <= 0) {
            // gamma not defined for zero or negative integers
            return NaN;
        } else {
            // use factorial for integer inputs
            return factorial(n - 1);
        }
    }

    // Decrement n, because approximation is defined for n - 1
    n--;

    if (n < 0) {
        // Use Euler's reflection formula for negative inputs
        // see:  https://en.wikipedia.org/wiki/Gamma_function#Properties
        return Math.PI / (Math.sin(Math.PI * -n) * gamma(-n));
    } else {
        // Nemes' expansion approximation
        var seriesCoefficient =
            Math.pow(n / Math.E, n) * Math.sqrt(2 * Math.PI * (n + 1 / 6));

        var seriesDenom = n + 1 / 4;

        var seriesExpansion =
            1 +
            1 / 144 / Math.pow(seriesDenom, 2) -
            1 / 12960 / Math.pow(seriesDenom, 3) -
            257 / 207360 / Math.pow(seriesDenom, 4) -
            52 / 2612736 / Math.pow(seriesDenom, 5) +
            5741173 / 9405849600 / Math.pow(seriesDenom, 6) +
            37529 / 18811699200 / Math.pow(seriesDenom, 7);

        return seriesCoefficient * seriesExpansion;
    }
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.gamma', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```