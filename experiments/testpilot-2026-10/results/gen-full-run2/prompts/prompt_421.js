The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.sign', function(done) {
        // Positive number should return 1
        assert.strictEqual(simple_statistics.sign(2), 1);
        // Negative number should return -1
        assert.strictEqual(simple_statistics.sign(-5), -1);
        // Zero should return 0
        assert.strictEqual(simple_statistics.sign(0), 0);
        // Non‑numeric input should throw a TypeError
        assert.throws(() => simple_statistics.sign('a'), TypeError);
        // Also test NaN (should be NaN? simple-statistics returns NaN for non‑number, but spec says TypeError)
        // According to the documentation, non‑number throws TypeError, so we test that as well
        assert.throws(() => simple_statistics.sign(NaN), TypeError);
        done();
    });
});
``` 
failed with the following error message:
```
Missing expected exception (TypeError).  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.