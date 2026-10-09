let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.PerceptronModel.prototype.train', function(done) {
        // Create a new perceptron model
        const model = new simple_statistics.PerceptronModel();

        // Prepare a feature vector
        const features = [2, 3];

        // 1. Invalid label should return null and not modify the model
        const resultInvalid = model.train(features, 2);
        assert.strictEqual(resultInvalid, null, 'train should return null for invalid label');
        // Model should still have empty weights and bias undefined (or initial state)
        assert.deepStrictEqual(model.weights, [], 'weights should remain unchanged for invalid label');

        // 2. First valid training with label 1 (initialization path)
        const resultFirst = model.train(features, 1);
        // train should return the model itself
        assert.strictEqual(resultFirst, model, 'train should return the model instance');
        // After initialization, weights should be the same array reference as features
        assert.strictEqual(model.weights, features, 'weights should be set to the feature array on first shape');
        // Bias should be set to 1
        assert.strictEqual(model.bias, 1, 'bias should be initialized to 1');

        // Prediction with these weights and bias will be 1 (since sum > 0)
        // Therefore no weight update should have occurred for label 1
        assert.deepStrictEqual(model.weights, [2, 3], 'weights should remain unchanged when prediction matches label');

        // 3. Train with the opposite label (0) to trigger an update
        const resultUpdate = model.train(features, 0);
        assert.strictEqual(resultUpdate, model, 'train should still return the model instance after update');

        // After the update, weights should be zeroed and bias should become 0
        assert.deepStrictEqual(model.weights, [0, 0], 'weights should be updated to zeros after incorrect prediction');
        assert.strictEqual(model.bias, 0, 'bias should be updated to 0 after incorrect prediction');

        // 4. Subsequent training with a new feature shape should re‑initialize
        const newFeatures = [1, 1, 1];
        model.train(newFeatures, 1);
        assert.strictEqual(model.weights, newFeatures, 'weights should be re‑initialized to new feature array');
        assert.strictEqual(model.bias, 1, 'bias should be reset to 1 on new shape');

        done();
    });
});