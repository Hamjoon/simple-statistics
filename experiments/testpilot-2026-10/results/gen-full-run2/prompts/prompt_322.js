The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quantile', function(done) {
        // Unsorted data set
        const data = [7, 1, 3, 5];

        // Single quantile tests
        // Median of [1,3,5,7] is (3+5)/2 = 4
        assert.strictEqual(simple_statistics.quantile(data, 0.5), 4);
        // Minimum and maximum
        assert.strictEqual(simple_statistics.quantile(data, 0), 1);
        assert.strictEqual(simple_statistics.quantile(data, 1), 7);

        // Array of quantiles test
        const qs = simple_statistics.quantile(data, [0, 0.25, 0.5, 0.75, 1]);
        // Expected values using linear interpolation on sorted [1,3,5,7]
        const expected = [1, 2.5, 4, 5.5, 7];

        // Compare each result with a small tolerance
        for (let i = 0; i < expected.length; i++) {
            assert.ok(Math.abs(qs[i] - expected[i]) < 1e-12, `Quantile ${i} mismatch`);
        }

        done();
    });
});
``` 
failed with the following error message:
```
Quantile 1 mismatch  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.