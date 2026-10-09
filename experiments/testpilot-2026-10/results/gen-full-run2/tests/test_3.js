let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier', function(done) {
        // Create a new Bayesian classifier instance
        const bayes = new simple_statistics.BayesianClassifier();

        // Train the classifier with a simple example
        bayes.train({ species: 'Cat' }, 'animal');

        // Score the same input
        const result = bayes.score({ species: 'Cat' });

        // Expected result: only the 'animal' class with probability 1
        const expected = { animal: 1 };

        // Verify that the result matches the expectation
        assert.deepStrictEqual(result, expected);

        // Also verify that the sum of probabilities is 1 (sanity check)
        const sum = Object.values(result).reduce((a, b) => a + b, 0);
        assert.strictEqual(sum, 1);

        done();
    });
});