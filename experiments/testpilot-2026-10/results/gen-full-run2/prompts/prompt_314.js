The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.probit', function(done) {
        // Median of the standard normal distribution should be 0
        assert.strictEqual(simple_statistics.prob)    })
})
``` 
failed with the following error message:
```
The "actual" and "expected" arguments must be specified  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.