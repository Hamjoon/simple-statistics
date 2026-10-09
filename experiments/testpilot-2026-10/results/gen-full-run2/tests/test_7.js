let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier.prototype.train', function(done) {
        // Create a new classifier instance
        const classifier = new simple_statistics.BayesianClassifier();

        // First training call
        const item1 = { color: 'red', shape: 'circle' };
        const category = 'fruit';
        classifier.train(item1, category);

        // Verify internal data after first training
        assert.deepStrictEqual(classifier.data, {
            fruit: {
                color: { red: 1 },
                shape: { circle: 1 }
            }
        });
        assert.strictEqual(classifier.totalCount, 1, 'totalCount should be 1 after first train');

        // Second training call with overlapping and new values
        const item2 = { color: 'red', shape: 'square' };
        classifier.train(item2, category);

        // Verify that counts have been incremented correctly
        assert.strictEqual(classifier.data.fruit.color.red, 2, 'color "red" count should be 2');
        assert.strictEqual(classifier.data.fruit.shape.circle, 1, 'shape "circle" count should remain 1');
        assert.strictEqual(classifier.data.fruit.shape.square, 1, 'shape "square" count should be 1');
        assert.strictEqual(classifier.totalCount, 2, 'totalCount should be 2 after second train');

        // Train a different category to ensure isolation
        const item3 = { color: 'blue', shape: 'triangle' };
        const otherCategory = 'vehicle';
        classifier.train(item3, otherCategory);

        // Verify new category data and totalCount
        assert.deepStrictEqual(classifier.data.vehicle, {
            color: { blue: 1 },
            shape: { triangle: 1 }
        });
        assert.strictEqual(classifier.totalCount, 3, 'totalCount should be 3 after third train');

        done();
    });
});