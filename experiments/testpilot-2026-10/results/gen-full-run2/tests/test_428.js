let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.quickselect', function(done) {
        // Basic functionality – k is zero‑based index of the sorted order
        const base = [3, 1, 4, 2, 5];
        assert.strictEqual(simple_statistics.quickselect(base.slice(), 0), 1); // smallest
        assert.strictEqual(simple_statistics.quickselect(base.slice(), 2), 3); // 3rd smallest
        assert.strictEqual(simple_statistics.quickselect(base.slice(), 4), 5); // largest

        // Using explicit left/right bounds
        // Sub‑array indices 2..7 of the original array = [8,2,7,3,6,4]
        const withBounds = [9, 1, 8, 2, 7, 3, 6, 4, 5];
        assert.strictEqual(simple_statistics.quickselect(withBounds.slice(), 0, 2, 7), 2); // smallest in sub‑array
        assert.strictEqual(simple_statistics.quickselect(withBounds.slice(), 3, 2, 7), 6); // 4th smallest in sub‑array

        done();
    });
});