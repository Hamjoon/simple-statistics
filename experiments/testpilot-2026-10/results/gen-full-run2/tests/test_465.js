let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.sampleRankCorrelation', function(done) {
        // perfect positive correlation ⇒ 1
        const xPos = [1, 2, 3, 4, 5];
        const yPos = [10, 20, 30, 40, 50];
        const rPos = simple_statistics.sampleRankCorrelation(xPos, yPos);
        assert.strictEqual(rPos, 1);

        // perfect negative correlation ⇒ -1
        const xNeg = [1, 2, 3, 4, 5];
        const yNeg = [50, 40, 30, 20, 10];
        const rNeg = simple_statistics.sampleRankCorrelation(xNeg, yNeg);
        assert.strictEqual(rNeg, -1);

        // a non‑trivial case – value taken from the library documentation
        const x = [1, 2, 3, 4, 5];
        const y = [5, 6, 7, 8, 7];
        const r = simple_statistics.sampleRankCorrelation(x, y);
        const expected = 0.9; // documented example result
        assert.ok(Math.abs(r - expected) < 1e-12, `expected ${expected}, got ${r}`);

        done();
    });
});