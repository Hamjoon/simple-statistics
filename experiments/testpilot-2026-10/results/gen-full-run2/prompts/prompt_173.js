The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.harmonicMean', function(done) {
        // standard calculation
        const result = simple_statistics.harmonicMean([2, 3]);
        assert.strictEqual(result, 2.4, 'Harmonic mean of [2,3] should be 2.4');

        // empty array should throw
        assert.throws(
            () => simple_statistics.harmonicMean([]),
            /harmonicMean requires at least one data point/
        );

        // negative value should throw
        assert.throws(
            () => simple_statistics.harmonicMean([1, -2]),
            /harmonicMean requires only positive numbers/
        );

        // zero value should also throw
        assert.throws(
            () => simple_statistics.harmonicMean([0, 1]),
            /harmonicMean requires only positive numbers/
        );

        done();
    });
});
``` 
failed with the following error message:
```
Harmonic mean of [2,3] should be 2.4
+ actual - expected

+ 2.4000000000000004
- 2.4
     ^
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.