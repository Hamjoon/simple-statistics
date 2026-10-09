let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function() {
    it(0.975);
        const expected975 = 1.959963984540054;
        assert.ok(Math.abs(q975 - expected975) < 1e-6,
            `prob