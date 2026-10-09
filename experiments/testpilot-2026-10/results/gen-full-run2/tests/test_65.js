let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.bisect', function(done) {
        // Function with known roots at x = -2 and x = 2
        function f(x) { return x * x - 4; }

        // Find the positive root
        const positiveRoot = simple_statistics.bisect(f, 0, 5, 100, 1e-7);
        assert.ok(Math.abs(positiveRoot - 2) < 1e-6, `Expected root near 2, got ${positiveRoot}`);

        // Find the negative root
        const negativeRoot = simple_statistics.bisect(f, -5, 0, 100, 1e-7);
        assert.ok(Math.abs(negativeRoot + 2) < 1e-6, `Expected root near -2, got ${negativeRoot}`);

        done();
    });
});