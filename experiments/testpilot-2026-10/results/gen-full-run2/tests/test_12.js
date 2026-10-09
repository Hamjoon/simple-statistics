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

        // Expected odds sums:
        // totalCount = 4
        // Category A: (2/4) for color:red + (1/4) for shape:square = 0.75
        // Category B: (0/4) for color:red + (1/4) for shape:square = 0.25
        const expected = { A: 0.75, B: 0.25 };

        // Verify the result matches the expectation
        assert.deepStrictEqual(result, expected);
        done();
    });
});