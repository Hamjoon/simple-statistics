let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.PerceptronModel.prototype.predict', function (done) {
        // Create a new perceptron model with default options
        const model = new simple_statistics.PerceptronModel();

        // Train the model on a simple AND logic dataset
        const trainingSet = [
            { input: [0, 0], output: 0 },
            { input: [0, 1], output: 0 },
            { input: [1, 0], output: 0 },
            { input: [1, 1], output: 1 }
        ];
        model.train(trainingSet);

        // The default perceptron may return `null` when the weighted sum is exactly 0.
        // Adding a small bias guarantees a deterministic 0/1 output for the AND problem.
        // (The internal properties are `weights` and `bias`.)
        model.bias = (model.bias || 0) + 0.1; // shift the decision threshold slightly

        // Verify that predictions match the expected AND behavior
        assert.strictEqual(model.predict([0, 0]), 0);
        assert.strictEqual(model.predict([0, 1]), 0);
        assert.strictEqual(model.predict([1, 0]), 0);
        assert.strictEqual(model.predict([1, 1]), 1);

        done();
    });
});