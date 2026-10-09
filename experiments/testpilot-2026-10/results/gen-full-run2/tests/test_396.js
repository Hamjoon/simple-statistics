let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it(p) returns the quantile for probability p.
        // For p = 0.5 (the median) the result should be 0.
        const median = simple_statistics.prob