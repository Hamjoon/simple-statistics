let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.PerceptronModel.prototype.predict', function(done) {
        // Create a perceptron and manually set its internal state
        const model = new simple_statistics.PerceptronModel();
        model.weights = [0.5, -0.2]; // two weights
        model.bias = 0.1;            // bias term

        // 1. Feature length mismatch should return null
        assert.strictEqual(model.predict([1]), null);

        // 2. Positive score should be classified as 1
        // score = 0.5*2 + (-0.2)*1 + 0.1 = 0.9 > 0
        assert.strictEqual(model.predict([2, 1]), 1);

        // 3. Negative score should be classified as 0
        // score = 0.5*0 + (-0.2)*1 + 0.1 = -0.1 < 0
        assert.strictEqual(model.predict([0, 1]), 0);

        // 4. Zero score should also be classified as 0 (score > 0 is required for 1)
        // Choose features that make the score exactly 0:
        // 0.5*0 + (-0.2)*0.5 + 0.1 = 0
        assert.strictEqual(model.predict([0, 0.5]), 0);

        done();
    });
});