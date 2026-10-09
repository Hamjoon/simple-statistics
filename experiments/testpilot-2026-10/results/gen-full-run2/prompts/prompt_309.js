The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.probit', function(done) {
        const probit = simple_statistics.probit;

        // Median of the normal distribution should be 0
        assert.ok(Math.abs(prob))    })
})
``` 
failed with the following error message:
```
prob is not defined  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.