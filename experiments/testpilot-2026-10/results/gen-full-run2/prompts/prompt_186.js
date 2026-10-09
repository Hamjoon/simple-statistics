The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.inverseErrorFunction', function(done) {
        const testValues = [-0.9, -0.5, -0.2, 0, 0.2, 0.5, 0.9];
        const tolerance = 1e-6;

        testValues.forEach(function (x) {
            const inv = simple_statistics.inverseErrorFunction(x);

            // sign check
            if (x < 0) {
                assert(inv < 0, `inverseErrorFunction(${x}) should be negative`);
            } else if (x > 0) {
                assert(inv > 0, `inverseErrorFunction(${x}) should be positive`);
            } else {
                assert.strictEqual(inv, 0, `inverseErrorFunction(0) should be 0`);
            }

            // round‑trip through errorFunction
            const back = simple_statistics.errorFunction(inv);
            assert(
                Math.abs(back - x) < tolerance,
                `round‑trip error too large for ${x}: expected ${x}, got ${back}`
            );
        });

        done();
    });
});
``` 
failed with the following error message:
```
round‑trip error too large for -0.9: expected -0.9, got -0.8997041923215432  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.