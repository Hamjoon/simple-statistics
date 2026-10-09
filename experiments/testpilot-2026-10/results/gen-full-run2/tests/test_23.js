let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.PerceptronModel', function (done) {
        // Create a perceptron model
        const model = new simple_statistics.PerceptronModel();

        // Simple AND logic gate (linearly separable)
        const inputs = [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1]
        ];
        // `simple-statistics` expects binary outputs as 0/1 (not -1/1)
        const outputs = [
            0, // 0 AND 0 => 0
            0, // 0 AND 1 => 0
            0, // 1 AND 0 => 0
            1  // 1 AND 1 => 1
        ];

        // Train the perceptron – give it a reasonable number of iterations
        model.train(inputs, outputs, {
            learningRate: 0.1,
            iterations: 1000
        });

        // Verify predictions (the model now returns 0/1)
        assert.strictEqual(model.predict([0, 0]), 0);
        assert.strictEqual(model.predict([0, 1]), 0);
        assert.strictEqual(model.predict([1, 0]), 0);
        assert.strictEqual(model.predict([1, 1]), 1);

        // The model should have a weight for each input plus a bias term
        assert.strictEqual(model.weights.length, inputs[0].length + 1);

        done();
    });
});