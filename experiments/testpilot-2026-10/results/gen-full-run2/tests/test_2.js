let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier', function(done) {
        // Create a new Bayesian classifier instance
        const bayes = new simple_statistics.BayesianClassifier();

        // Train the classifier with a single example
        bayes.train({ species: 'Cat' }, 'animal');

        // Score the same example
        const result = bayes.score({ species: 'Cat' });

        // The classifier should be certain that the label is 'animal'
        assert.deepStrictEqual(result, { animal: 1 });

        done();
    });
});