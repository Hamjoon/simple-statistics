The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.quantileSorted', function(done) {
        // Sorted array for testing
        const arr = [1, 2, 3, 4];

        // p = 0 should return the first element
        assert.strictEqual(simple_statistics.quantileSorted(arr, 0), 1);

        // p = 1 should return the last element
        assert.strictEqual(simple_statistics.quantileSorted(arr, 1), 4);

        // Median (p = 0.5) – linear interpolation between the two middle values
        assert.strictEqual(simple_statistics.quantileSorted(arr, 0.5), 2.5);

        // Quarter quantile (p = 0.25)
        // index = (n-1) * p = 3 * 0.25 = 0.75
        // value = arr[0] + (arr[1] - arr[0]) * 0.75 = 1 + (2-1)*0.75 = 1.75
        assert.strictEqual(simple_statistics.quantileSorted(arr, 0.25), 1.75);

        // Empty array should throw an error
        assert.throws(() => simple_statistics.quantileSorted([], 0.5));

        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:

1.5 !== 1.75
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.