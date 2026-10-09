let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.addToMean', function(done) {
        // Case 1: typical values
        let mean1 = 10;
        let n1 = 4;
        let newValue1 = 14;
        let expected1 = 10 + (newValue1 - mean1) / (n1 + 1); // 10.8
        let result1 = simple_statistics.addToMean(mean1, n1, newValue1);
        assert.ok(Math.abs(result1 - expected1) < 1e-12, `addToMean(${mean1}, ${n1}, ${newValue1}) should be ${expected1}, got ${result1}`);

        // Case 2: n = 0 (first element)
        let mean2 = 0;
        let n2 = 0;
        let newValue2 = 5;
        let expected2 = newValue2; // when n = 0, result should be the new value
        let result2 = simple_statistics.addToMean(mean2, n2, newValue2);
        assert.ok(Math.abs(result2 - expected2) < 1e-12, `addToMean(${mean2}, ${n2}, ${newValue2}) should be ${expected2}, got ${result2}`);

        // Case 3: negative numbers
        let mean3 = -3;
        let n3 = 2;
        let newValue3 = -7;
        let expected3 = -3 + (newValue3 - (-3)) / (n3 + 1); // -3 + (-4)/3 = -4.333...
        let result3 = simple_statistics.addToMean(mean3, n3, newValue3);
        assert.ok(Math.abs(result3 - expected3) < 1e-12, `addToMean(${mean3}, ${n3}, ${newValue3}) should be ${expected3}, got ${result3}`);

        done();
    });
});