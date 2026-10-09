let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combineVariances', function(done) {
        const variance1 = 14 / 3;
        const mean1 = 5;
        const n1 = 3;
        const variance2 = 8 / 3;
        const mean2 = 4;
        const n2 = 3;

        const result = simple_statistics.combineVariances(
            variance1,
            mean1,
            n1,
            variance2,
            mean2,
            n2
        );

        const expected = 47 / 12;
        assert.ok(
            Math.abs(result - expected) < 1e-12,
            `Expected ${expected}, but got ${result}`
        );
        done();
    });
});