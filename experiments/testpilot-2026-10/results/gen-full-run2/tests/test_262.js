let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it('test simple-statistics.logit', function(done) {
        const epsilon = 1e-12;

        // Known values: log