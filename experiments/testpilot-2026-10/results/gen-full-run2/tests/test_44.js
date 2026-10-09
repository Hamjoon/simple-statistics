let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.approxEqual', function (done) {
        // Exact equality should be true regardless of tolerance
        assert.strictEqual(simple_statistics.approxEqual(5, 5, 0), true);
        assert.strictEqual(simple_statistics.approxEqual(5, 5, 1e-9), true);

        // Values within tolerance should be true
        assert.strictEqual(simple_statistics.approxEqual(0.1 + 0.2, 0.3, 1e-9), true);
        assert.strictEqual(simple_statistics.approxEqual(5, 5.000001, 0.000001), true);

        // Values outside tolerance should be false
        // Use a tolerance smaller than the floating‑point error (~5.55e-17) to get a false result
        assert.strictEqual(simple_statistics.approxEqual(0.1 + 0.2, 0.3, 1e-17), false);
        assert.strictEqual(simple_statistics.approxEqual(5, 5.000002, 0.000001), false);

        done();
    });
});