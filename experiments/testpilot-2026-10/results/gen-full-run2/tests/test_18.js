let mocha = require('mocha');
let assert = require('assert');
let ss = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.BayesianClassifier.prototype.score', function (done) {
        // Create a new classifier using the factory function
        const classifier = ss.bayesianClassifier();

        // Train it with two distinct classes
        // NOTE: addExample takes (exampleArray, className) in the current API
        classifier.addExample(['buy', 'cheap', 'viagra'], 'spam');
        classifier.addExample(['hello', 'friend'], 'ham');

        // Build the internal probability tables
        classifier.train();

        // Score a new item that contains a word from the 'spam' class
        const scores = classifier.score(['buy']);

        // The result should contain both class keys
        assert.ok('spam' in scores, 'Result should contain a "spam" key');
        assert.ok('ham' in scores, 'Result should contain a "ham" key');

        // Probabilities should sum to (approximately) 1
        const sum = scores['spam'] + scores['ham'];
        assert.ok(Math.abs(sum - 1) < 1e-6, `Probabilities sum to ${sum}, expected ~1`);

        // The 'spam' probability should be higher than 'ham' for this input
        assert.ok(
            scores['spam'] > scores['ham'],
            `'spam' (${scores['spam']}) should be > 'ham' (${scores['ham']})`
        );

        done();
    });
});