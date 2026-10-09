The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.tTest', function(done) {
        // Sample data and expected value
        const sample = [2, 4, 6, 8, 10];
        const expectedValue = 5;

        // Compute t‑statistic using the library
        const t = simple_statistics.tTest(sample, expectedValue);

        // Manually calculated t‑statistic:
        // mean = 6, sd (sample) = sqrt(40/4) = sqrt(10) ≈ 3.1622776601683795
        // rootN = sqrt(5) ≈ 2.23606797749979
        // t = (6 - 5) / (sd / rootN) ≈ 0.7071067811865475
        const expectedT = 0.7071067811865475;

        // Verify the result is within a tight tolerance
        assert.ok(Math.abs(t - expectedT) < 1e-12, `t value ${t} differs from expected ${expectedT}`);

        done();
    });
});
``` 
failed with the following error message:
```
t value 0.7905694150420948 differs from expected 0.7071067811865475  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.