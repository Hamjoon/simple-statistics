let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it(0.5) should be exactly 0');

        // 0.975 should be close to the 97.5th percentile of the standard normal (~1.959964)
        const q975 = simple_statistics.prob