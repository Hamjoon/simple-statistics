let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.PerceptronModel', function(done) {
        // Create a new perceptron model
        const p = new simple_statistics.PerceptronModel();

        // Train the model with a simple diagonal boundary
        for (let i = 0; i < 5; i++) {
            p.train([1, 1], 1);
            p.train([0, 1], 0);
            p.train([1, 0], 0);
            p.train([0, 0], 0);
        }

        // Verify predictions match the expected classification
        assert.strictEqual(p.predict([0, 0]), 0, 'predict([0,0]) should be 0');
        assert.strictEqual(p.predict([0, 1]), 0, 'predict([0,1]) should be 0');
        assert.strictEqual(p.predict([1, 0]), 0, 'predict([1,0]) should be 0');
        assert.strictEqual(p.predict([1, 1]), 1, 'predict([1,1]) should be 1');

        done();
    });
});