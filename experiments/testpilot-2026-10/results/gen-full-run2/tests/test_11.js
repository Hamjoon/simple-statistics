let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier.prototype.score', function(done) {
        // Create a new classifier
        const classifier = new simple_statistics.BayesianClassifier();

        // Train it with two distinct classes
        classifier.addExample('spam', ['buy', 'cheap', 'viagra']);
        classifier.addExample('ham',  ['hello', 'friend']);

        // Build the internal probability tables
        classifier.train();

        // Score a new item that contains a word from the 'spam' class
        const scores = classifier.score(['buy']);

        // The result should contain both class keys
        assert.ok('spam' in scores, 'Result should contain a "spam" key');
        assert.ok('ham'  in scores, 'Result should contain a "ham" key');

        // Probabilities should sum to (approximately) 1
        const sum = scores['spam'] + scores['ham'];
        assert.ok(Math.abs(sum - 1) < 1e-6, `Probabilities sum to ${sum}, expected ~1`);

        // The 'spam' probability should be higher than 'ham' for this input
        assert.ok(scores['spam'] > scores['ham'], `'spam' (${scores['spam']}) should be > 'ham' (${scores['ham']})`);

        done();
    });
});