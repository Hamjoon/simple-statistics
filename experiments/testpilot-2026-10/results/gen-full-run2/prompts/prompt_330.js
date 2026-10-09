The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantileRank', function(done) {
        // Basic ordered array
        const arr1 = [1, 2, 3, 4, 5];
        assert.strictEqual(simple_statistics.quantileRank(arr1, 1), 0);
        assert.strictEqual(simple_statistics.quantileRank(arr1, 5), 1);
        assert.strictEqual(simple_statistics.quantileRank(arr1, 3), 0.5);

        // Unordered input should be handled the same way
        const arr2 = [5, 1, 3, 2, 4];
        assert.strictEqual(simple_statistics.quantileRank(arr2, 1), 0);
        assert.strictEqual(simple_statistics.quantileRank(arr2, 5), 1);
        assert.strictEqual(simple_statistics.quantileRank(arr2, 3), 0.5);

        // Array with duplicate values
        const arr3 = [1, 2, 2, 2, 3];
        // Expected rank: (countLess + 0.5 * countEqual) / (n - 1)
        // countLess = 1 (value 1), countEqual = 3 (three 2's), n = 5
        // rank = (1 + 0.5*3) / 4 = 2.5 / 4 = 0.625
        const rank = simple_statistics.quantileRank(arr3, 2);
        const epsilon = 1e-12;
        assert.ok(Math.abs(rank - 0.625) < epsilon, `Expected rank ~0.625, got ${rank}`);

        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:

0.2 !== 0
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.