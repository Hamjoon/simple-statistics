The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier.prototype.score', function(done) {
        // Create a new Bayesian classifier
        const classifier = new simple_statistics.BayesianClassifier();

        // Train it with two distinct categories
        classifier.train('catA', { color: 'red', shape: 'circle' });
        classifier.train('catB', { color: 'blue', shape: 'square' });

        // Score an item that mixes attributes from both categories
        const result = classifier.score({ color: 'red', shape: 'square' });

        // Expected result based on the implementation of `score`
        // Only the last processed key ('shape') contributes due to the
        // resetting of `odds[category]` inside the loop.
        const expected = { catA: 0, catB: 0.5 };

        assert.deepStrictEqual(result, expected);
        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly deep-equal:
+ actual - expected

  {
+   '[object Object]': 0
-   catA: 0,
-   catB: 0.5
  }
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.