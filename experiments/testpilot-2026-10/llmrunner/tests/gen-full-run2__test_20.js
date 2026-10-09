let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.PerceptronModel', function(done) {
        // Create a new perceptron model instance
        const model = new simple_statistics.PerceptronModel();

        // The constructor should initialise an empty weights array
        assert.ok(Array.isArray(model.weights), 'weights should be an array');
        assert.strictEqual(model.weights.length, 0, 'weights array should be empty');

        // The bias should be initialised to 0
        assert.strictEqual(model.bias, 0, 'bias should be 0');

        // Ensure that each new instance gets its own separate weights array
        const anotherModel = new simple_statistics.PerceptronModel();
        anotherModel.weights.push(1);
        assert.strictEqual(model.weights.length, 0, 'original model weights should remain unchanged');
        assert.strictEqual(anotherModel.weights.length, 1, 'new model weights should reflect the push');

        done();
    });
});