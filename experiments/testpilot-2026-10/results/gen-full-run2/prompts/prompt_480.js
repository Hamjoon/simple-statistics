The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.variance', function(done) {
        // Known dataset: population variance of [1,2,3,4,5] is 2
        const data = [1, 2, 3, 4, 5];
        const result = simple_statistics.variance(data);
        assert.strictEqual(result, 2);

        // Variance should throw when there are fewer than two values
        assert.throws(() => simple_statistics.variance([42]), /requires at least two/);

        done();
    });
});
``` 
failed with the following error message:
```
Missing expected exception.  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.