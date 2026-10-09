let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.tTest', function(done) {
        const sample = [1, 2, 3, 4, 5, 6];
        const expectedMean = 3.385;
        const t = simple_statistics.tTest(sample, expectedMean);
        const rounded = Number(t.toFixed(2));
        assert.strictEqual(rounded, 0.16);
        done();
    });
});