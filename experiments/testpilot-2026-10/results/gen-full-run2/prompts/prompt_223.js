The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.logAverage', function(done) {
        // Typical case: geometric mean of [1, 10] should be sqrt(10)
        const data = [1, 10];
        const result = simple_statistics.logAverage(data);
        const expected = Math.sqrt(10);
        assert.ok(Math.abs(result - expected) < 1e-12, `Expected ${expected}, got ${result}`);

        // Single element: logAverage should return the element itself
        assert.strictEqual(simple_statistics.logAverage([5]), 5, 'Single element should return itself');

        // Empty array: should return NaN (as per simple-statistics behavior)
        assert.ok(isNaN(simple_statistics.logAverage([])), 'Empty array should return NaN');

        done();
    });
});
``` 
failed with the following error message:
```
logAverage requires at least one data point  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.