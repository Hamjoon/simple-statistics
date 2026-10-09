let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.BayesianClassifier', function (done) {
        // Create a new classifier instance
        const classifier = new simple_statistics.BayesianClassifier();

        // Train the classifier with two distinct categories
        classifier.train('spam', ['offer', 'free', 'money']);
        classifier.train('ham', ['hello', 'friend']);

        // Predict a message that should be classified as spam
        const spamCategory = classifier.classify(['free', 'money']);
        assert.strictEqual(spamCategory, 'spam', 'Message should be classified as spam');

        // Get the probability for the chosen category
        const spamProbs = classifier.getClassifications(['free', 'money']);
        const spamProb = spamProbs.find(p => p.category === 'spam').probability;
        assert.ok(spamProb > 0.5, 'Spam probability should be > 0.5');

        // Predict a message that should be classified as ham
        const hamCategory = classifier.classify(['hello']);
        assert.strictEqual(hamCategory, 'ham', 'Message should be classified as ham');

        // Get the probability for the chosen category
        const hamProbs = classifier.getClassifications(['hello']);
        const hamProb = hamProbs.find(p => p.category === 'ham').probability;
        assert.ok(hamProb > 0.5, 'Ham probability should be > 0.5');

        done();
    });
});