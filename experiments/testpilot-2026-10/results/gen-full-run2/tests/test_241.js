let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');
describe('test simple_statistics', function() {
    it(0.2) should equal ln(0.2/0.8)');

        // Edge cases: values outside (0,1) should throw
        assert.throws(() => simple_statistics.log