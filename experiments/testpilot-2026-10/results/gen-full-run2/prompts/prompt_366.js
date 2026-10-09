The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sample', function(done) {
        // deterministic random source that always returns 0 (select first element each time)
        const data = [10, 20, 30, 40, 50];
        const sampleFirst = simple_statistics.sample(data, 3, () => 0);
        // Should return the first three elements in order
        assert.deepStrictEqual(sampleFirst, [10, 20, 30]);

        // Ensure the original array is unchanged
        assert.deepStrictEqual(data, [10, 20, 30, 40, 50]);

        // deterministic random source that always returns a value close to 1 (select last element each time)
        const sampleLast = simple_statistics.sample(data, 2, () => 0.999);
        // First pick removes 50, second pick removes 40
        assert.deepStrictEqual(sampleLast, [50, 40]);

        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly deep-equal:
+ actual - expected

  [
-   10,
    20,
    30,
+   40
  ]
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.