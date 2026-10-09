let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it(dataMatch, uniformDist, 0.05);
        // chi‑squared = 0 → should NOT reject (false)
        assert.strictEqual(resultMatch, false, 'Uniform data should not be rejected');

        // 2️⃣ Data that deviates strongly from the hypothesised distribution
        const dataBad = [0, 0, 0, 0];
        const resultBad = simple_statistics.chiSquaredGoodnessOfF})