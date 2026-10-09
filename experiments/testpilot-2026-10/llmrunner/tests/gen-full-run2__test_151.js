let mocha = require('mocha');
let assert = require('assert');
let simple_statistics = require('simple-statistics');

describe('test simple_statistics', function () {
    it('test simple-statistics.erf', function (done) {
        const tolerance = 1e-7;

        // Known values of the error function – use tolerance for all checks
        assert.ok(Math.abs(simple_statistics.erf(0) - 0) < tolerance);
        assert.ok(Math.abs(simple_statistics.erf(0.5) - 0.5204998778130465) < tolerance);
        assert.ok(Math.abs(simple_statistics.erf(1) - 0.8427007929497149) < tolerance);
        assert.ok(Math.abs(simple_statistics.erf(2) - 0.9953222650189527) < tolerance);

        done();
    });
});