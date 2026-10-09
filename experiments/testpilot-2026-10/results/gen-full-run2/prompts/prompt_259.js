The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.min', function(done) {
        // Basic functionality
        assert.strictEqual(simple_statistics.min([5, 2, 9, -1, 3]), -1);
        // Single-element array
        assert.strictEqual(simple_statistics.min([10]), 10);
        // Empty array should return undefined
        assert.strictEqual(simple_statistics.min([]), undefined);
        done();
    });
});
``` 
failed with the following error message:
```
min requires at least one data point  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.