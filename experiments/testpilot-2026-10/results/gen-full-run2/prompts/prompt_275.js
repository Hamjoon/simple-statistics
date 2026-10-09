The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.modeFast', function(done) {
        // Basic functionality – the most frequent element is returned
        assert.strictEqual(
            simple_statistics.modeFast(['rabbits', 'rabbits', 'squirrels']),
            'rabbits',
            'should return the element that appears most often'
        );

        // Tie handling – when counts are equal, the most recently seen mode wins
        assert.strictEqual(
            simple_statistics.modeFast([1, 2, 2, 3, 3]),
            3,
            'should return the most recently encountered mode in a tie'
        );

        // Empty input should throw an Error
        assert.throws(
            () => simple_statistics.modeFast([]),
            /Error/,
            'should throw an error for an empty array'
        );

        done();
    });
});
``` 
failed with the following error message:
```
should return the most recently encountered mode in a tie

2 !== 3
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.