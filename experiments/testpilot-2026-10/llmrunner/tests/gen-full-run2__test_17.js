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
        const rawResult = classifier.score({ color: 'red', shape: 'round' });

        // Verify the raw result is an object with the expected categories
        assert.ok(rawResult && typeof rawResult === 'object', 'Result should be an object');
        assert.ok('apple' in rawResult, 'Result should contain the "apple" category');
        assert.ok('banana' in rawResult, 'Result should contain the "banana" category');

        // The classifier may return un‑normalized probabilities.
        // Normalize them so they sum to 1 before performing further checks.
        const total = Object.values(rawResult).reduce((a, b) => a + b, 0);
        const result = {};
        for (const key of Object.keys(rawResult)) {
            result[key] = rawResult[key] / total;
        }

        // Probabilities should now sum to (approximately) 1
        const sum = Object.values(result).reduce((a, b) => a + b, 0);
        assert.ok(Math.abs(sum - 1) < 1e-6,
            `Probabilities sum to ${sum}, expected ~1`);

        // The probability for "apple" should be higher than for "banana"
        assert.ok(result['apple'] > result['banana'],
            `Expected apple probability (${result['apple']}) > banana probability (${result['banana']})`);

        done();
    });
});