Your task is to write a test for the following function
```
simple-statistics.kde(X, kernel, bandwidthMethod)
```

This function is defined as follows:
```
function kernelDensityEstimation(X, kernel, bandwidthMethod) {
    var kernelFn;
    if (kernel === undefined) {
        kernelFn = kernels.gaussian;
    } else if (typeof kernel === "string") {
        if (!kernels[kernel]) {
            throw new Error('Unknown kernel "' + kernel + '"');
        }
        kernelFn = kernels[kernel];
    } else {
        kernelFn = kernel;
    }

    var bandwidth;
    if (typeof bandwidthMethod === "undefined") {
        bandwidth = bandwidthMethods.nrd(X);
    } else if (typeof bandwidthMethod === "string") {
        if (!bandwidthMethods[bandwidthMethod]) {
            throw new Error(
                'Unknown bandwidth method "' + bandwidthMethod + '"'
            );
        }
        bandwidth = bandwidthMethods[bandwidthMethod](X);
    } else {
        bandwidth = bandwidthMethod;
    }

    return function (x) {
        var i = 0;
        var sum = 0;
        for (i = 0; i < X.length; i++) {
            sum += kernelFn((x - X[i]) / bandwidth);
        }
        return sum / bandwidth / X.length;
    };
}
```

Please proceed by modifying the following code fragment
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.kde', function(done) {
``` 
so that it becomes a single, self-contained unit test.  The test should not rely on any external resources. 
For example, it should not attempt to access files that it does not create itself.
Keep the three `require` lines exactly as given and make them the first three lines of your code block; do not put a comment, a file name, or anything else before them. Write exactly one `it` block.

Provide your answer as a fenced code block 
```
<unit test>
```