let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.approxEqual', function(done) {
        // exact equality should always be true
        assert.strictEqual(simple_statistics.approxEqual(5, 5, 0.01), true);

        // values within the supplied tolerance should be true
        assert.strictEqual(simple_statistics.approxEqual(1, 1.01, 0.02), true);

        // values outside the supplied tolerance should be false
        assert.strictEqual(simple_statistics.approxEqual(1, 1.5, 0.2), false);

        // default tolerance (epsilon) – a value half an epsilon away should be true
        const epsilon = Number.EPSILON;
        const close = 1 + epsilon / 2;
        assert.strictEqual(simple_statistics.approxEqual(1, close), true);

        // a value two epsilons away should be false with the default tolerance
        const notClose = 1 + epsilon * 2;
        assert.strictEqual(simple_statistics.approxEqual(1, notClose), false);

        done();
    });
});