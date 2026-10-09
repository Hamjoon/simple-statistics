let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.PerceptronModel.prototype.train', function(done) {
        const PerceptronModel = simple_statistics.PerceptronModel;

        // 1. Invalid label should return null and not modify the model
        const modelInvalid = new PerceptronModel();
        const retInvalid = modelInvalid.train([1, 2], 2); // label not 0 or 1
        assert.strictEqual(retInvalid, null);
        // weights should stay as initially defined (undefined or empty)
        assert.ok(!modelInvalid.weights || modelInvalid.weights.length === 0);

        // 2. First training with a valid label initializes weights and bias
        const modelInit = new PerceptronModel();
        const retInit = modelInit.train([1, 2], 1);
        assert.strictEqual(retInit, modelInit);               // returns the model itself
        assert.deepStrictEqual(modelInit.weights, [1, 2]); // weights are set to the feature array
        assert.strictEqual(modelInit.bias, 1);               // bias is set to 1

        // 3. Training with a wrong label (prediction = 1, label = 0) updates weights & bias
        const modelUpdate = new PerceptronModel();
        modelUpdate.train([1, 2], 0); // first call also initializes
        // After initialization: weights = [1,2], bias = 1, prediction = 1
        // gradient = label - prediction = -1
        // new weights = [1 + (-1)*1, 2 + (-1)*2] = [0, 0]
        // new bias   = 1 + (-1) = 0
        // However, because predict uses the *current* weights (which are the same array as features),
        // the dot‑product is 1*1 + 2*2 = 5, so prediction is 1 and the update becomes:
        //   weights = [1 -1*1, 2 -1*2] = [0, 0]
        //   bias    = 1 -1 = 0
        // The implementation actually adds gradient * features[i] to each weight,
        // so the expected result is [0,0] and bias 0.
        assert.deepStrictEqual(modelUpdate.weights, [0, 0]);
        assert.strictEqual(modelUpdate.bias, 0);

        // 4. Subsequent training with same feature length should NOT re‑initialize
        //    but continue learning from the current state.
        // Use a new set of features of the same length.
        modelUpdate.train([2, 3], 0);
        // Current state before this call: weights = [0,0], bias = 0
        // Prediction = 0 (dot = 0, bias = 0 => not > 0)
        // Since prediction (0) equals label (0), no update should happen.
        assert.deepStrictEqual(modelUpdate.weights, [0, 0]);
        assert.strictEqual(modelUpdate.bias, 0);

        // 5. Force an update again with a label that differs from the prediction.
        //    Use label = 1 so prediction (0) is wrong.
        modelUpdate.train([2, 3], 1);
        // Prediction = 0, gradient = 1 - 0 = 1
        // New weights = [0 + 1*2, 0 + 1*3] = [2, 3]
        // New bias   = 0 + 1 = 1
        assert.deepStrictEqual(modelUpdate.weights, [2, 3]);
        assert.strictEqual(modelUpdate.bias, 1);

        done();
    });
});