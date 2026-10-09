The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.probit', function(done) {
        const eps = 1e-6;

        // Median of the normal distribution should be 0
        assert.ok(Math.abs(simple_statistics.prob))    })
})
``` 
failed with the following error message:
```
The expression evaluated to a falsy value:

  assert.ok(Math.abs(simple_statistics.prob))
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.