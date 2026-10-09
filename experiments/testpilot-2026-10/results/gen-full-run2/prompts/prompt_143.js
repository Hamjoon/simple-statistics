The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.extent', function(done) {
        // Typical case
        assert.deepStrictEqual(simple_statistics.extent([1, 2, 3]), [1, 3]);
        // Unsorted array with negative numbers
        assert.deepStrictEqual(simple_statistics.extent([5, -2, 10]), [-2, 10]);
        // Single element array
        assert.deepStrictEqual(simple_statistics.extent([42]), [42, 42]);
        // Empty array should return [undefined, undefined]
        assert.deepStrictEqual(simple_statistics.extent([]), [undefined, undefined]);
        done();
    });
});
``` 
failed with the following error message:
```
extent requires at least one data point  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.