The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.probit', function(done) {
        // 0.5 should map to the median of the standard normal (0)
        const median = simple_statistics.prob    })
})
``` 
failed with the following error message:
```
Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/path/to/test/test_361.js)  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.