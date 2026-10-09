let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier.prototype.score', function(done) {
        // Create a new Bayesian classifier
        const classifier = new simple_statistics.BayesianClassifier();

        // Train it with two distinct categories
        classifier.train('catA', { color: 'red', shape: 'circle' });
        classifier.train('catB', { color: 'blue', shape: 'square' });

        // Score an item that mixes attributes from both categories
        // `score` returns a Map in recent versions of simple-statistics,
        // so convert it to a plain object before asserting.
        const result = Object.fromEntries(
            classifier.score({ color: 'red', shape: 'square' })
        );

        // Expected result based on the implementation of `score`
        // Only the last processed key ('shape') contributes due to the
        // resetting of `odds[category]` inside the loop.
        const expected = { catA: 0, catB: 0.5 };

        assert.deepStrictEqual(result, expected);
        done();
    });
});