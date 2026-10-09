The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.mode', function(done) {
        // Basic mode
        assert.strictEqual(simple_statistics.mode([0, 0, 1]), 0);
        // Tie: most recently seen element should win
        assert.strictEqual(simple_statistics.mode([1, 2, 2, 3, 3]), 3);
        // Single element list
        assert.strictEqual(simple_statistics.mode([5]), 5);
        // Negative numbers and multiple occurrences
        assert.strictEqual(simple_statistics.mode([-1, -1, -2, -2, -2]), -2);
        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:

2 !== 3
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.