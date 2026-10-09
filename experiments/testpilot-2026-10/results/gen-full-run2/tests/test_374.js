let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it(0.5) should be ~0');

        // One standard deviation above the mean: p = Φ(1) ≈ 0.841344746
        const pOneStd = 0.5 + 0.6826894921370859 / 2; // ≈ 0.841344746
        assert.ok(Math.abs(prob