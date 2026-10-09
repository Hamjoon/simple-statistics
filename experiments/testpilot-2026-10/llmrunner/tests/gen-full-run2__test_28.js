let mocha = require('mocha');
let assert = require('assert');
let ss = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple_statistics.PerceptronModel.prototype.predict', function (done) {
        // Create a perceptron with known weights and bias
        const weights = [1, -1];
        const bias = 0;

        // Initialise the model without training – we will inject the known parameters manually
        const model = new ss.PerceptronModel();
        model.weights = weights;   // <-- manually set the weight vector
        model.bias = bias;         // <-- manually set the bias term

        // Positive score should yield 1
        const featuresPos = [2, 1]; // 2*1 + 1*(-1) = 1 > 0
        const predPos = model.predict(featuresPos);
        assert.strictEqual(predPos, 1, 'Predict should return 1 for a positive score');

        // Non‑positive score should yield 0
        const featuresNeg = [0, 1]; // 0*1 + 1*(-1) = -1 < 0
        const predNeg = model.predict(featuresNeg);
        assert.strictEqual(predNeg, 0, 'Predict should return 0 for a non‑positive score');

        done();
    });
});