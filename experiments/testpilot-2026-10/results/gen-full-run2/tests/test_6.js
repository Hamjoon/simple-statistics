let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier.prototype.train', function(done) {
        // Create a new BayesianClassifier instance
        const classifier = new simple_statistics.BayesianClassifier();

        // First training item
        classifier.train({ color: 'red', shape: 'circle' }, 'fruit');

        // Verify internal data after first train
        assert.strictEqual(classifier.totalCount, 1, 'totalCount should be 1 after first train');
        assert.strictEqual(classifier.data['fruit']['color']['red'], 1, 'red color count should be 1');
        assert.strictEqual(classifier.data['fruit']['shape']['circle'], 1, 'circle shape count should be 1');

        // Second training item, same category, overlapping key
        classifier.train({ color: 'red', shape: 'square' }, 'fruit');

        // Verify counts are accumulated correctly
        assert.strictEqual(classifier.totalCount, 2, 'totalCount should be 2 after second train');
        assert.strictEqual(classifier.data['fruit']['color']['red'], 2, 'red color count should be 2');
        assert.strictEqual(classifier.data['fruit']['shape']['circle'], 1, 'circle shape count should remain 1');
        assert.strictEqual(classifier.data['fruit']['shape']['square'], 1, 'square shape count should be 1');

        // Third training item, new category
        classifier.train({ color: 'green' }, 'vegetable');

        // Verify new category data and totalCount
        assert.strictEqual(classifier.totalCount, 3, 'totalCount should be 3 after third train');
        assert.strictEqual(classifier.data['vegetable']['color']['green'], 1, 'green color count in vegetable should be 1');

        done();
    });
});