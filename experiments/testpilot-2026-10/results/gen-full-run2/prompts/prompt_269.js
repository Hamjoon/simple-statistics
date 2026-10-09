The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.mode', function(done) {
        // Single mode case
        let single = simple_statistics.mode([1, 2, 2, 3, 4]);
        assert.strictEqual(single, 2, 'Mode of [1,2,2,3,4] should be 2');

        // Multiple mode case (two values appear equally often)
        let multiple = simple_statistics.mode([5, 5, 6, 6, 7]);
        // The function returns an array sorted in ascending order
        assert.deepStrictEqual(multiple, [5, 6], 'Mode of [5,5,6,6,7] should be [5,6]');

        // Mode with non‑numeric values
        let strings = simple_statistics.mode(['a', 'b', 'a', 'c', 'b', 'b']);
        assert.strictEqual(strings, 'b', "Mode of ['a','b','a','c','b','b'] should be 'b'");

        done();
    });
});
``` 
failed with the following error message:
```
Mode of [5,5,6,6,7] should be [5,6]
+ actual - expected

+ 5
- [
-   5,
-   6
- ]
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.