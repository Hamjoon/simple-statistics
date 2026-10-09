let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it(0) should return a finite number');

        // Edge case p = 1 should be handled by 1 - epsilon, not +Infinity
        const pOne = simple_statistics.prob