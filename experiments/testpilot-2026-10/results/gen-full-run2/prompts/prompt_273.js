The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.modeFast', function(done) {
        // Basic functionality
        assert.strictEqual(simple_statistics.modeFast([1, 2, 2, 3, 3, 3]), 3);

        // Tie – most recently seen value should win
        //   first 'a' appears, then 'b' appears twice, then 'a' appears again (making a tie)
        //   The function should return the later 'a'.
        assert.strictEqual(simple_statistics.modeFast(['a', 'b', 'b', 'a']), 'a');

        // Example from documentation
        assert.strictEqual(
            simple_statistics.modeFast(['rabbits', 'rabbits', 'squirrels']),
            'rabbits'
        );

        // Empty array should throw an error with the expected message
        assert.throws(
            () => simple_statistics.modeFast([]),
            /mode requires at last one data point/
        );

        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:

'b' !== 'a'
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.