let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.standardDeviation', function(done) {
        // Example from the documentation
        const data = [2, 4, 4, 4, 5, 5, 7, 9];
        const sd = simple_statistics.standardDeviation(data);
        assert.strictEqual(sd, 2);

        // Edge case: single-element array should return 0
        const single = [5];
        const sdSingle = simple_statistics.standardDeviation(single);
        assert.strictEqual(sdSingle, 0);

        done();
    });
});