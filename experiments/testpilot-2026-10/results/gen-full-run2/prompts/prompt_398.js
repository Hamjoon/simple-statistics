The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleStandardDeviation', function(done) {
        // Known dataset: sample standard deviation should be sqrt(32/7)
        const data = [2, 4, 4, 4, 5, 5, 7, 9];
        const result = simple_statistics.sampleStandardDeviation(data);
        const expected = Math.sqrt(32 / 7);
        assert.ok(Math.abs(result - expected) < 1e-12, `Expected ${expected}, got ${result}`);

        // Edge case: array with a single element should return NaN
        const single = [5];
        const resultSingle = simple_statistics.sampleStandardDeviation(single);
        assert.ok(isNaN(resultSingle), 'Expected NaN for single-element array');

        done();
    });
});
``` 
failed with the following error message:
```
sampleVariance requires at least two data points  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.