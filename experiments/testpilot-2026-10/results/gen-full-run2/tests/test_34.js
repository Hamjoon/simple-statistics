let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.PerceptronModel.prototype.train', function (done) {
        // Create a perceptron.  Some versions of simple‑statistics expect the
        // learning rate to be set after construction, so we set it explicitly.
        const model = new simple_statistics.PerceptronModel();
        model.learningRate = 0.5;          // ensure the correct learning rate
        model.bias = -1;                   // force an initial prediction of 0

        // Ensure weights start empty (treated as zeros internally)
        assert.deepStrictEqual(model.weights, []);

        // Train on a simple example
        const features = [2, -1];
        const label = 1;
        const returned = model.train(features, label);

        // `train` should return the model itself
        assert.strictEqual(returned, model);

        // Expected updates according to the perceptron rule:
        // error = label - prediction = 1 - 0 = 1
        // newWeight[i] = oldWeight[i] + learningRate * error * feature[i]
        // newBias = oldBias + learningRate * error
        const expectedWeights = [1, -0.5]; // 0.5 * 1 * feature
        const expectedBias = -0.5;        // -1 + 0.5 * 1

        // Verify weights and bias are updated correctly (allowing tiny floating‑point error)
        assert.ok(Math.abs(model.weights[0] - expectedWeights[0]) < 1e-12);
        assert.ok(Math.abs(model.weights[1] - expectedWeights[1]) < 1e-12);
        assert.ok(Math.abs(model.bias - expectedBias) < 1e-12);

        done();
    });
});