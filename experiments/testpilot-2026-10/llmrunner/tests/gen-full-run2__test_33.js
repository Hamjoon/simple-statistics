let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple_statistics.PerceptronModel.prototype.train', function(done) {
        // Create a perceptron for 2 features
        const model = new simple_statistics.PerceptronModel(2);
        // Ensure the model starts with zero weights (default) and bias
        // Train with a positive example: features [1, 0] should be classified as 1
        const ret = model.train([1, 0], 1);
        // The train method should return the model itself (this)
        assert.strictEqual(ret, model, 'train should return the model instance');
        // After training, the model should predict the correct label for the same input
        const prediction = model.predict([1, 0]);
        assert.strictEqual(prediction, 1, 'model should predict 1 after training on a positive example');
        // Train with a negative example: features [0, 1] should be classified as 0
        model.train([0, 1], 0);
        // The model should now predict 0 for the negative example
        const negPrediction = model.predict([0, 1]);
        assert.strictEqual(negPrediction, 0, 'model should predict 0 after training on a negative example');
        done();
    });
});