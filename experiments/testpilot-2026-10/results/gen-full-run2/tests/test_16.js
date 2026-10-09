let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier.prototype.score', function(done) {
        // Create a new Bayesian classifier
        const classifier = new simple_statistics.BayesianClassifier();

        // Train the classifier with a few simple examples
        classifier.train({ color: 'red',    shape: 'round' }, 'apple');
        classifier.train({ color: 'green',  shape: 'round' }, 'apple');
        classifier.train({ color: 'yellow', shape: 'long'  }, 'banana');
        classifier.train({ color: 'green',  shape: 'long'  }, 'banana');

        // Score a new item that resembles an apple
        const result = classifier.score({ color: 'red', shape: 'round' });

        // Verify the result is an object with the expected categories
        assert.ok(result && typeof result === 'object', 'Result should be an object');
        assert.ok('apple' in result, 'Result should contain the "apple" category');
        assert.ok('banana' in result, 'Result should contain the "banana" category');

        // Probabilities should sum to (approximately) 1
        const sum = Object.values(result).reduce((a, b) => a + b, 0);
        assert.ok(Math.abs(sum - 1) < 1e-6, `Probabilities sum to ${sum}, expected ~1`);

        // The probability for "apple" should be higher than for "banana"
        assert.ok(result['apple'] > result['banana'],
            `Expected apple probability (${result['apple']}) > banana probability (${result['banana']})`);

        done();
    });
});