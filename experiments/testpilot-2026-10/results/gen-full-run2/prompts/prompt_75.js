The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.chiSquaredGoodnessOfFit', function(done) {
        // A simple uniform distribution over the values 0‑3
        function uniformDist(mean) {
            // ignore the estimated mean – return equal probabilities
            return {0: 0.25, 1: 0.25, 2: 0.25, 3: 0.25};
        }

        // 1️⃣ Data that perfectly matches the hypothesised distribution
        const dataMatch = [0, 1, 2, 3];
        const resultMatch = simple_statistics.chiSquaredGoodnessOfF    })
})
``` 
failed with the following error message:
```
Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/path/to/test/test_71.js)  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.