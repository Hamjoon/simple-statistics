The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sum', function(done) {
        // Basic integer sum
        assert.strictEqual(simple_statistics.sum([1, 2, 3, 4]), 10);
        // Sum with negative numbers
        assert.strictEqual(simple_statistics.sum([-1, -2, -3]), -6);
        // Sum with floating point numbers (accounting for JS floating‑point precision)
        assert.strictEqual(simple_statistics.sum([0.1, 0.2, 0.3]), 0.6000000000000001);
        // Sum of an empty array should be 0
        assert.strictEqual(simple_statistics.sum([]), 0);
        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:
+ actual - expected

+ 0.6
- 0.6000000000000001
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.