let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.PerceptronModel', function(done) {
        // Create a new perceptron model
        const p = new simple_statistics.PerceptronModel();

        // Train the model with a diagonal decision boundary
        for (let i = 0; i < 5; i++) {
            p.train([1, 1], 1);
            p.train([0, 1], 0);
            p.train([1, 0], 0);
            p.train([0, 0], 0);
        }

        // Verify predictions
        assert.strictEqual(p.predict([0, 0]), 0);
        assert.strictEqual(p.predict([0, 1]), 0);
        assert.strictEqual(p.predict([1, 0]), 0);
        assert.strictEqual(p.predict([1, 1]), 1);

        done();
    });
});