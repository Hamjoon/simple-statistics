let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier', function(done) {
        // Create a new classifier instance
        const classifier = new simple_statistics.BayesianClassifier();

        // Train the classifier with two distinct categories
        classifier.train('spam', ['offer', 'free', 'money']);
        classifier.train('ham', ['hello', 'friend']);

        // Predict a message that should be classified as spam
        const spamResult = classifier.predict(['free', 'money']);
        assert.strictEqual(spamResult.category, 'spam');
        // Probability for the chosen category should be reasonably high
        assert.ok(spamResult.probability > 0.5, 'Spam probability should be > 0.5');

        // Predict a message that should be classified as ham
        const hamResult = classifier.predict(['hello']);
        assert.strictEqual(hamResult.category, 'ham');
        // Probability for the chosen category should be reasonably high
        assert.ok(hamResult.probability > 0.5, 'Ham probability should be > 0.5');

        done();
    });
});