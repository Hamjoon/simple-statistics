let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.combineMeans', function(done) {
        // Typical case: weighted average of two samples
        let mean1 = 10, n1 = 5;
        let mean2 = 20, n2 = 15;
        let combined = simple_statistics.combineMeans(mean1, n1, mean2, n2);
        let expected = (mean1 * n1 + mean2 * n2) / (n1 + n2);
        assert.strictEqual(combined, expected);

        // Edge case: second sample has zero size (should return first mean)
        mean1 = 7; n1 = 10;
        mean2 = 0; n2 = 0;
        combined = simple_statistics.combineMeans(mean1, n1, mean2, n2);
        expected = mean1; // only first sample contributes
        assert.strictEqual(combined, expected);

        // Edge case: both samples have zero size (result should be NaN)
        mean1 = 0; n1 = 0;
        mean2 = 0; n2 = 0;
        combined = simple_statistics.combineMeans(mean1, n1, mean2, n2);
        assert.ok(isNaN(combined));

        done();
    });
});