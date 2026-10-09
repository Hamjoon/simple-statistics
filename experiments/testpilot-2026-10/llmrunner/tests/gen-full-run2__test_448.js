let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sample', function(done) {
        const input = [1, 2, 3, 4, 5];
        // deterministic random source that always returns 0
        const alwaysZero = () => 0;
        const result = simple_statistics.sample(input, 3, alwaysZero);
        // With a Fisher‑Yates shuffle that always picks index 0,
        // the shuffled array becomes [2,3,4,5,1] and the first 3 elements are [2,3,4]
        assert.deepStrictEqual(result, [2, 3, 4]);
        done();
    });
});