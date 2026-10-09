let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.PerceptronModel.prototype.predict', function(done) {
        // Create a perceptron model and manually set weights & bias
        const model = new simple_statistics.PerceptronModel();
        model.weights = [0.5, -0.2, 0.3];
        model.bias = -0.1;

        // Case 1: score > 0 should return 1
        // score = 0.5*1 + (-0.2)*2 + 0.3*3 + (-0.1) = 0.9 > 0
        let result = model.predict([1, 2, 3]);
        assert.strictEqual(result, 1);

        // Case 2: score <= 0 should return 0
        // score = bias = -0.1 <= 0
        result = model.predict([0, 0, 0]);
        assert.strictEqual(result, 0);

        // Case 3: mismatched feature length should return null
        result = model.predict([1, 2]); // only 2 features vs 3 weights
        assert.strictEqual(result, null);

        done();
    });
});