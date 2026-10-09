The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combineVariances', function(done) {
        // Dataset 1: [2, 4, 6]
        const variance1 = 4;   // sample variance
        const mean1 = 4;
        const n1 = 3;

        // Dataset 2: [10, 14]
        const variance2 = 8;   // sample variance
        const mean2 = 12;
        const n2 = 2;

        const combined = simple_statistics.combineVariances(variance1, mean1, n1, variance2, mean2, n2);
        const expected = 23.2; // sample variance of [2,4,6,10,14]

        assert.ok(Math.abs(combined - expected) < 1e-10);
        done();
    });
});
``` 
failed with the following error message:
```
The expression evaluated to a falsy value:

  assert.ok(Math.abs(combined - expected) < 1e-10)
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.