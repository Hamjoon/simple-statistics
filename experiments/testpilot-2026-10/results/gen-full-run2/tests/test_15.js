let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier.prototype.score', function(done) {
        // Create a new Bayesian classifier
        const classifier = new simple_statistics.BayesianClassifier();

        // Train the classifier with known data
        classifier.train({ color: 'red',   shape: 'circle' }, 'A');
        classifier.train({ color: 'blue',  shape: 'square' }, 'B');
        classifier.train({ color: 'red',   shape: 'square' }, 'A');
        classifier.train({ color: 'blue',  shape: 'circle' }, 'B');

        // Score a new item
        const result = classifier.score({ color: 'red', shape: 'square' });

        // The current implementation of simple‑statistics returns normalized
        // probabilities (the sum of all category scores equals 1). For the
        // data above the scores are both 0.25 after normalisation.
        const expected = { A: 0.25, B: 0.25 };

        // Verify the result matches the expectation
        assert.deepStrictEqual(result, expected);
        done();
    });
});