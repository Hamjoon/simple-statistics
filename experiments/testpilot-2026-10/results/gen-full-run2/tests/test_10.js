let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.BayesianClassifier.prototype.train', function (done) {
        // Create a new classifier instance
        const classifier = new simple_statistics.BayesianClassifier();

        // Ensure the `categories` array exists – some versions of the library may not
        // initialise it until after the first training call.
        if (!Array.isArray(classifier.categories)) {
            classifier.categories = [];
        }

        // First training call
        classifier.train(['apple', 'banana', 'apple'], 'fruit');

        // Verify internal state after first training
        assert.ok(
            (classifier.categories || []).includes('fruit'),
            'Category "fruit" should be registered'
        );
        assert.strictEqual(
            classifier.categoryCount['fruit'],
            1,
            'Category count for "fruit" should be 1'
        );
        assert.strictEqual(
            classifier.tokenCount['fruit']['apple'],
            2,
            'Token "apple" should have count 2 in "fruit"'
        );
        assert.strictEqual(
            classifier.tokenCount['fruit']['banana'],
            1,
            'Token "banana" should have count 1 in "fruit"'
        );

        // Second training call on the same category with new tokens
        classifier.train(['banana', 'cherry'], 'fruit');

        // Verify updated state for the same category
        assert.strictEqual(
            classifier.categoryCount['fruit'],
            2,
            'Category count for "fruit" should be incremented to 2'
        );
        assert.strictEqual(
            classifier.tokenCount['fruit']['banana'],
            2,
            'Token "banana" count should be incremented to 2'
        );
        assert.strictEqual(
            classifier.tokenCount['fruit']['cherry'],
            1,
            'Token "cherry" should have count 1'
        );

        // Training a different category
        classifier.train(['car', 'engine'], 'vehicle');

        // Verify state for the new category
        assert.ok(
            (classifier.categories || []).includes('vehicle'),
            'Category "vehicle" should be registered'
        );
        assert.strictEqual(
            classifier.categoryCount['vehicle'],
            1,
            'Category count for "vehicle" should be 1'
        );
        assert.strictEqual(
            classifier.tokenCount['vehicle']['car'],
            1,
            'Token "car" should have count 1 in "vehicle"'
        );
        assert.strictEqual(
            classifier.tokenCount['vehicle']['engine'],
            1,
            'Token "engine" should have count 1 in "vehicle"'
        );

        done();
    });
});