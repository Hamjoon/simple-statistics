The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.average', function(done) {
        // Basic functionality
        assert.strictEqual(simple_statistics.average([1, 2, 3]), 2);
        assert.strictEqual(simple_statistics.average([5]), 5);
        assert.strictEqual(simple_statistics.average([-1, 1]), 0);
        assert.strictEqual(simple_statistics.average([0.1, 0.2]), 0.15);
        // Edge case: empty array should return NaN
        assert.ok(isNaN(simple_statistics.average([])));
        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:
+ actual - expected

+ 0.15000000000000002
- 0.15
      ^
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.