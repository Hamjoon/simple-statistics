The test:
```
let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier.prototype.train', function(done) {
        // Create a new Bayesian classifier instance
        const classifier = new simple_statistics.BayesianClassifier();

        // Define a simple training item with shallow key/value pairs
        const trainingItem = { color: 'red', shape: 'circle' };
        const category = 'fruit';

        // Train the classifier with the item
        classifier.train(trainingItem, category);

        // Verify that the classifier knows about the new category
        const categories = classifier.categories();
        assert.ok(Array.isArray(categories), 'categories() should return an array');
        assert.ok(categories.includes(category), 'trained category should be present');

        // Verify that classifying the same item returns the trained category
        const predicted = classifier.classify(trainingItem);
        assert.strictEqual(predicted, category, 'classifier should predict the trained category');

        done();
    });
});
``` 
failed with the following error message:
```
classifier.categories is not a function  
```

Your task is to modify the above code to fix the test. 

Provide your answer as a fenced code block.