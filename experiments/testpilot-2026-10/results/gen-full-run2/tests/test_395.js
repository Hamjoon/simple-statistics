let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple_statistics.probit', function (done) {
        const eps = 1e-6;

        // The median of the standard normal distribution is 0.
        // prob