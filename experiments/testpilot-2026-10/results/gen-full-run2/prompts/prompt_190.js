The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.inverseErrorFunction', function(done) {
        // Known values for the inverse error function
        const testCases = [
            { x: 0, expected: 0 },
            { x: 0.5, expected: 0.4769362762044699 },
            { x: -0.5, expected: -0.4769362762044699 },
            { x: 0.8, expected: 0.9061938024368232 },
            { x: -0.8, expected: -0.9061938024368232 }
        ];
        const tolerance = 1e-12;

        testCases.forEach(({x, expected}) => {
            const result = simple_statistics.inverseErrorFunction(x);
            assert.ok(Math.abs(result - expected) < tolerance,
                `inverseErrorFunction(${x}) ≈ ${expected}, got ${result}`);
        });

        // Edge cases: out‑of‑range inputs should return NaN
        assert.ok(isNaN(simple_statistics.inverseErrorFunction(1.5)), 'out‑of‑range >1 should be NaN');
        assert.ok(isNaN(simple_statistics.inverseErrorFunction(-1.5)), 'out‑of‑range <-1 should be NaN');

        // Edge case: x = 1 should return Infinity (or a very large number)
        const infResult = simple_statistics.inverseErrorFunction(1);
        assert.ok(infResult === Infinity || infResult > 1e10, 'inverseErrorFunction(1) should be Infinity or very large');

        done();
    });
});
``` 
failed with the following error message:
```
inverseErrorFunction(0.5) ≈ 0.4769362762044699, got 0.4769187006037746  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.