The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.chiSquaredGoodnessOfFit', function(done) {
        // Data from Poisson goodness‑of‑fit example 10‑19 (William W. Hines & Douglas C. Montgomery)
        var data1019 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2, 2, 2,
            3, 3, 3, 3
        ];

        // Poisson distribution with λ = 2 (the mean of the data set)
        var poissonDist = simple_statistics.poissonDistribution(2);

        // Significance level 0.05 – the example expects the test to fail (return false)
        var result = simple_statistics.chiSquaredGoodnessOfF    })
})
``` 
failed with the following error message:
```
Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (/path/to/test/test_86.js)  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.