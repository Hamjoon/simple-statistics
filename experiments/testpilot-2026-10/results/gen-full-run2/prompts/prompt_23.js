The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.PerceptronModel', function(done) {
        // Create a perceptron model
        const model = new simple_statistics.PerceptronModel();

        // Simple AND logic gate (linearly separable)
        const inputs = [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1]
        ];
        const outputs = [
            -1, // 0 AND 0 => 0 (represented as -1)
            -1, // 0 AND 1 => 0
            -1, // 1 AND 0 => 0
            1   // 1 AND 1 => 1
        ];

        // Train the perceptron
        model.train(inputs, outputs);

        // Verify predictions
        assert.strictEqual(model.predict([0, 0]), -1);
        assert.strictEqual(model.predict([0, 1]), -1);
        assert.strictEqual(model.predict([1, 0]), -1);
        assert.strictEqual(model.predict([1, 1]), 1);

        // The model should have a weight for each input plus a bias term
        assert.strictEqual(model.weights.length, inputs[0].length + 1);

        done();
    });
});
``` 
failed with the following error message:
```
Expected values to be strictly equal:

null !== -1
  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.