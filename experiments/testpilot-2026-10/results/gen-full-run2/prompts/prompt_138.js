The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.erf', function(done) {
        const tolerance = 1e-7;

        // Known values of the error function
        assert.strictEqual(simple_statistics.erf(0), 0);
        assert.ok(Math.abs(simple_statistics.erf(0.5) - 0.5204998778130465) < tolerance);
        assert.ok(Math.abs(simple_statistics.erf(1) - 0.8427007929497149) < tolerance);
        assert.ok(Math.abs(simple_statistics.erf(2) - 0.9953222650189527) < tolerance);

        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:
+ actual - expected

+ -3.0000000483809686e-8
- 0
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.