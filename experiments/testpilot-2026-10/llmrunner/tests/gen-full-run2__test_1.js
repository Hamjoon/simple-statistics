let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.BayesianClassifier', function(done) {
        // Create a new BayesianClassifier instance
        const classifier = new simple_statistics.BayesianClassifier();

        // Verify that the initial totalCount is 0
        assert.strictEqual(classifier.totalCount, 0, 'totalCount should be initialized to 0');

        // Verify that the initial data object is empty
        assert.deepStrictEqual(classifier.data, {}, 'data should be initialized as an empty object');

        // Ensure the instance has the expected properties
        assert.ok('totalCount' in classifier, 'classifier should have a totalCount property');
        assert.ok('data' in classifier, 'classifier should have a data property');

        done();
    });
});